import Component from "../core/Components.js";

export default class ItemAppender extends Component {

    template() {
        return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
    }

    setEvent() {
        const {addItem} = this.$props;
        this.addEvent('keyup', '.appender', ({key, target}) => {
            if (key !== 'Enter') return;
            addItem(target.value);
            //todo. event.target 새로 그려진다.
            console.log(event.target);
            event.target.focus();
        });
    }
}