import Component from "../core/Components.js";

export default class Items extends Component {
    setup() {
        this.$state = {items: ['item1', 'item2']};
    }

    template() {
        const {items} = this.$state;
        return `
            <ul>
                ${items.map((item, key) => `
                    <li>
                        ${item}
                        <button class="delete-btn" data-index="${key}">삭제</button>
                    </li>
                `).join('')}
            </ul>
            <button class="add-btn">추가</button>
        `
    }

    setEvent() {
        this.addEvent('click', '.add-btn', () => {
            const {items} = this.$state;
            this.setState({items: [...items, `item${items.length + 1}`]});
        })
        this.addEvent('click', '.delete-btn', ({target}) => {
            const items = [...this.$state.items];
            items.splice(+target.dataset.index, 1);
            this.setState({items});
        })
    }
}