from bson import ObjectId,json_util as j
from flask import jsonify
from pymongo import MongoClient
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage
import BackEnd.GlobalInfo.Keys as ColabsKey

if ColabsKey.dbconn==None:
    mongoConnect=MongoClient(ColabsKey.strConnection)
    ColabsKey.dbconn=mongoConnect[ColabsKey.strDBConnection]
    dbUsers=ColabsKey.dbconn["clUsers"]
    dbClients=ColabsKey.dbconn["clClients"]

#Funcion de post clientes
def fnAuthPost(user,password):
    try:
        print("Comprobacion de credenciales")
        objQuery=dbUsers.find_one({"strName":user,"strPassword":password})
        id=str(objQuery.get('_id'))
        if(user==objQuery.get('strName') and password==objQuery.get('strPassword')):
            objResponse=ResponseMessage.succ200.copy()
            objResponse['Prueba']=id
            objResponse['Estatus_Acreditado']=True
            return jsonify(objResponse)
    except Exception as e:
        objResponse=ResponseMessage.err500
        objResponse["Estatus_Acreditado"]=False
        return jsonify(objResponse,e)

def fnGetUser(id):
    try:
        print("Comprobacion de credenciales")
        objQuery=dbUsers.find_one({"_id":ObjectId(id)})
        nombre=objQuery.get('strName')
        apellido=objQuery.get('strFirstLast')
        rol=objQuery.get('strRole')
        objResponse=ResponseMessage.succ200.copy()
        objResponse['Nombre']=nombre
        objResponse['Apellido']=apellido
        objResponse['Rol']=rol
        objResponse['Estatus_Acreditado']=True
        print(objResponse)
        return jsonify(objResponse)
    except Exception as e:
        objResponse=ResponseMessage.err500
        objResponse["Estatus_Acreditado"]=False
        return jsonify(objResponse,e)

def fnSearchTerm(param):
    try:
        arrFinalColab=[]
        objQuery=dbClients.find({'$or': [{'strNombre': {'$regex': param, '$options': 'i'}},
            {'strLast': {'$regex': param, '$options': 'i'}}]})
        listClients=list(objQuery)
        if len(listClients)!=0:
            for objClient in listClients:
                objFormateado={
                    "_id":str(objClient['_id']),
                    "Nombre":objClient["strNombre"],
                    "Apellido":objClient['strLast']
                }
                arrFinalColab.append(objFormateado)
        objResponse=ResponseMessage.succ200.copy()
        objResponse['Respuesta']=arrFinalColab
        print(objResponse)
        return jsonify(objResponse)
    except Exception as e:
        print("Error en fnSearchTerm",e)
        objResponse=ResponseMessage.err500
        return jsonify(objResponse)