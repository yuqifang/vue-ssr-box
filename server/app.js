const express = require('express')
const app = express()
const port = 3000
// 当路径为根路径，返回完整的html片段
app.get('/api', (req, res) => res.send(`
  <html>
    <body>
      <h1>hi server !!</h1>
    </body>
  </html>
`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))