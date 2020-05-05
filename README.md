# Webinar Serverless - Mayo 2020

Español:

En estas carpetas hay dos ejemplos de funciones serverless básicas:

- `webinar-images` permite resizear cualquier imágen jpeg.
- `webinar-chrome` permite sacar screenshots a cualquier página web.

Ambos ejemplos son similares y resuelven problemas que pueden requerir alocar mucha CPU en poco tiempo.

Prerequisitos:

- Una *terminal* bash (los ejemplos están hechos para macos o linux).
- Cuenta de Amazon AWS.
- Amazon CLI Instalada.
  - Nunca la instalaron, pueden empezar con este link: [https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  - Luego deben setear las credenciales con este link: [https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)

Ambos ejemplos utilizan el framework [https://www.serverless.com/](serverless) ya que abstrae el proveedor cloud pero a su vez permite entender el proceso. El ejemplo sólo funciona en AWS Lambda.
Hay otras alternativas que simplifican más el desarrollo como [https://vercel.com](vercel) o [https://apex.sh/up](up) suelen requerir menos configuración.

--------

English TBD
