#Importacion de librerías
from flask import Flask,jsonify,request
from flask_cors import CORS, cross_origin
import BackEnd.Functions as CallMethod
import BackEnd.GlobalInfo.ResponseMessages as ResponseMessage

#Instancia
app=Flask(__name__)
CORS(app,resources={r"/*":{"origins":"*"}})

#Definición de rutas

#Importante aqui viene la subida de cliente.
"""
@app.route('/newClient', methods=['GET','POST'])
@cross_origin(allow_headers=['Content-Type'])
def postClientes():
    try:
        rfc=None if("RCF" not in request.json) else request.json['RFC']
        curp=None if("CURP" not in request.json)else request.json['CURP']
        nombre=None if("Nombre" not in request.json)else request.json['Nombre']
        paterno=None if("apellidoPaterno" not in request.json)else request.json['apellidoPaterno']
        materno=None if("apellidoMaterno" not in request.json)else request.json['apellidoMaterno']
        giro=None if("Giro" not in request.json)else request.json['Giro']
        direccion=None if("Direccion" not in request.json)else request.json['Direccion']
        cp=None if("codigoPostal" not in request.json)else request.json['codigoPostal']
        claveFiel=None if("claveFiel" not in request.json)else request.json['claveFiel']
        claveCiec=None if("claveCsd" not in request.json)else request.json['claveCsd']
        regimen=None if("regimenFiscal" not in request.json)else request.json['regimenFiscal']
        costo=None if("cobroMensual" not in request.json)else request.json['cobroMensual']
        telefono=None if("Telefono" not in request.json)else request.json['Telefono']
        notas=None if("Notas" not in request.json)else request.json['Notas']
        objResult=CallMethod.fnPostClientes(rfc,curp,nombre,paterno,materno,giro,direccion,cp,claveFiel,claveCiec,regimen,costo,notas,telefono)
        return objResult
    except Exception as e:
        print("Error en post clientes",e)
        return jsonify(ResponseMessage.err500)
"""
@app.route('/auth', methods=['GET','POST'])
@cross_origin(allow_headers=['Content-Type'])
def authPost():
    try:
        user=request.json['user']
        password=request.json['password']
        print(user,password)
        objResult=CallMethod.fnAuthPost(user,password)
        return objResult
    except Exception as e:
        print("Error en auth",e)
        return jsonify(ResponseMessage.err500)

app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)
