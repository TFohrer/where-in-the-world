export default {
  methods: {
    objectArrayToString (array, key) {
      let response = ''

      if (array.length > 0) {
        array.forEach((arrayObject, arrayIndex, array) => {
          if (key && key in arrayObject) {
            response += arrayObject[key]
          } else {
            response += arrayObject.toString()
          }

          if (!(arrayIndex === array.length - 1)) {
            response += ', '
          }
        })
      }

      return response
    }
  }
}
