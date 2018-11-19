class View {
  static display(msg , data) {
    if(data == null) {
      console.log(msg)
    } else {
      console.log(msg , data)
    }
  }
}

module.exports = View