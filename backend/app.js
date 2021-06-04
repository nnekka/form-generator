const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


app.get('/formConfig-1', (req, res) => {
  res.json([
    {
      formControlName: 'name',
      label: 'Имя',
      type: 'text',
      required: true
    },
    {
      formControlName: 'age',
      label: 'Возраст',
      type: 'number',
      required: true
    },
    {
      formControlName: 'skills',
      label: 'Навыки',
      type: 'checkbox',
      options: ['js', 'css', 'html']
    },
    {
      formControlName: 'school',
      label: 'ВУЗ',
      type: 'select',
      options: ['ВОЛГУ', 'ВГТУ', 'СХУ']
    }
  ])
})



module.exports = app
