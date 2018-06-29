var objectWithDot = {
  friend: {
    showThis() {
      console.log(this);
    }
  },
  showThis() {
    console.log(this);
  }
};

objectWithDot.friend.showThis();

objectWithDot.showThis();



