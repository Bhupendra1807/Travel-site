import $ from 'jquery';
class Modal{
  constructor(){
    this.openModalButton=$('.open-modal');
    this.modal= $('.modal');
    this.closeModalButton= $('.modal__close');
    this.event();
  }

  event(){
    //clicking open modal button
    this.openModalButton.click(this.openModal.bind(this));

    //clicking X close button
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key
    $(document).keyup(this.keyPresshandler.bind(this));


  }

  keyPresshandler(e){
    if (e.keyCode==27){
      this.closeModal();
    }
  }
  openModal(){
    this.modal.addClass('modal--is-visible');
    return false;
  }
  closeModal(){
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
