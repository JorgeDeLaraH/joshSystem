from bson import ObjectId,json_util as j
from flask import jsonify
from pymongo import MongoClient
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage
import BackEnd.GlobalInfo.Keys as ColabsKey

if ColabsKey.dbconn==None:
    mongoConnect=MongoClient(ColabsKey.strConnection)
    ColabsKey.dbconn=mongoConnect[ColabsKey.strDBConnection]
    dbClientes=ColabsKey.dbconn["ClClientes"]

def fnGetColabs():
    try:
        arrFinalColab=[]
        objQuery=dbClientes.find({})
        listColabs=list(objQuery)
        print(objQuery)
        if len(listColabs)!=0:
            for objColab in listColabs:
                print(objColab)
                objFormateado={
                    "_id":str(objColab['_id']),
                    "Nombre":objColab['Nombre']
                }
                arrFinalColab.append(objFormateado)
        objResponse=ResponseMessage.succ200.copy()
        objResponse['Respuesta']=arrFinalColab
        return jsonify(objResponse)
    except Exception as e:
        print("Error en fngetcolabs",e)
        return jsonify(ResponseMessage.err500)

#Funcion de post clientes
def fnPostClientes(rfc,curp,nombre,paterno,materno,giro,direccion,cp,claveFiel,claveCiec,regimen,costo,notas,telefono):
    try:
        print("Insertare datos")
        dbClientes.insert_many([{"strRFC":rfc},{"strCURP":curp},{"strNombre":nombre},{"strPaterno":paterno},{"strMaterno":materno},{"strGiro":giro},{"strDireccion":direccion},{"intCP":cp},{"strClaveFiel":claveFiel},{"strClaveCiec":claveCiec},{"strRegimen":regimen},{"floatCosto":costo},{"intTelefonos":telefono},{"strNotas":notas}])
        objResponse=ResponseMessage.succ200.copy()
        objResponse['Información_Registrada']=True
        return jsonify(objResponse)
    except Exception as e:
        print("Error en fnPostClientes",e)
        return jsonify(ResponseMessage.err500)
