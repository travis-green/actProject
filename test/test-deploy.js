const projPackaging = require('../build/build-deploy')

async function t() {
  try {
    const res = await projPackaging()
    console.log('======res===========')
    console.log(res)
  } catch (error) {
    console.log('======error===========')
    console.log(error)
  }
}

t()
