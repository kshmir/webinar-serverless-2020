Este ejemplo utiliza Google Chrome para descargar sitios web enteros como imágenes con el parámetro `url`.

Se utiliza el framework [https://www.serverless.com/](serverless) ya que abstrae el proveedor de cloud y permite entender las abstracciones sobre las cuales estamos parados. El ejemplo sólo funciona en AWS Lambda.
Hay otras alternativas que simplifican más el desarrollo como [https://vercel.com](vercel) o [https://apex.sh/up](up).

# Cómo correr en Development

```
# instalamos los paquetes de node.js necesarios
npm install

# corremos el emulador
sls offline --port PORT
```

# Cómo correr en Producción

Si tienen configurada su Amazon CLI, una vez hechos esos cambios, deberían poder correr el proyecto

```
sls deploy
curl "https://<sustackid>.execute-api.us-east-1.amazonaws.com/dev/urlImage?url=https://google.com" > google.com.jpeg
```
