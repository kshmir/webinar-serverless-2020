Este ejemplo utiliza la librería `imagemagick` para convertir imágenes dinámicamente en base a los parámetros `width`, `height` y `url`.

# Cómo correr en Development

```
# instalamos la libreria imagemagick
brew install imagemagick      # macos (requiere "homebrew")
apt-get install imagemagick   # linux

# instalamos los paquetes de node.js necesarios
npm install

# corremos el emulador
sls offline --port PORT
```

# Cómo correr en Producción

Se requiere instalar una "lambda layer" previamente en su proyecto de AWS haciendo click "Deploy" en [https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:145266761615:applications~image-magick-lambda-layer](este link).
Proviene de [https://serverless.pub/lambda-utility-layers/](esta lista) con otras librerías también útiles.

Se debe actualizar el archivo serverless.yml:

`deploymentBucket` debe ser un bucket creado por ustedes.
`statickArn -> arn` debe ser el ARN (Amazon Resource Name) de la lambda layer que hayan creado al instalar imagemagick.

Si tienen configurada su Amazon CLI, una vez hechos esos cambios, deberían poder correr el proyecto

```
sls deploy
curl "https://<sustackid>.execute-api.us-east-1.amazonaws.com/dev/image?width=800&height=800&quality=80&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F556666%2Fpexels-photo-556666.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500" > resize.jpeg
```
