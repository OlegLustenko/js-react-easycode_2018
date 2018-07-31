class ECSlider {
  constructor(options) {
    const {
      activePicture, sliderClassName
    } = options;

    this.slider = document.querySelector('.' + sliderClassName);
    this.buttonLeft = document.querySelector('.ec-left');
    this.buttonRight = document.querySelector('.ec-right');
    /*
    *
    * activePicture
    *
    * */

    this.state = {
      activePicture,
      totalPictures: this.slider.childElementCount,
    };

    this.initializeEvents();
  }

  clickButtonLeft() {
    this.buttonLeft.onclick = () => {
      const {
        activePicture,
      } = this.state;

      const nextStep = activePicture - 1;
      this.state.activePicture = nextStep;

      this.renderView(activePicture, nextStep)
    };
  }

  clickButtonRight() {
    this.buttonRight.onclick = (event) => {

      const {
        activePicture,
        totalPictures,
      } = this.state;

      /* LOGIC (Controller) */
      let nextStep = activePicture + 1;
      if(nextStep === totalPictures) {
        nextStep = 0;
      }

      /*MODEL(State) БАЗА ДАННЫХ*/
      this.state.activePicture = nextStep;
      /*
      *
      * VIEW - отображения
      * */
      this.renderView(activePicture, nextStep)
    };
  }

  renderView(activePicture, nextStep) {
    this.slider.children[activePicture].style.display = 'none';
    this.slider.children[nextStep].style.display = 'block';
  }

  initializeEvents() {
    this.clickButtonLeft();
    this.clickButtonRight();
  }

  static initialize(options) {
    return new ECSlider(options);
  }
}
