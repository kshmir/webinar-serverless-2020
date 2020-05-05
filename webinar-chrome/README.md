Este ejemplo utiliza Google Chrome para descargar sitios web enteros como imágenes con el parámetro `url`.

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

UN PROBLEMA: Sitios como nytimes.com no funcionan ya que por algún motivo la función no funciona con videos y sonido. Esto se debe a la versión de chrome/puppeteer, seguramente una versión más vieja funcione. [https://github.com/alixaxel/chrome-aws-lambda/issues/104](https://github.com/alixaxel/chrome-aws-lambda/issues/104)
