import Component from "../core/Components.js";

export default class Items extends Component {
    get filteredItems() {
        const {isFilter, items} = this.$state;
        return items.filter(({active}) => (active && isFilter === 1) ||
            (!active && isFilter === 2) || isFilter === 0
        )
    }

    setup() {
        this.$state = {
            isFilter: 0,
            items: [{
                seq: 1,
                contents: 'item1',
                active: false
            }, {
                seq: 2,
                contents: 'item2',
                active: true
            }]
        };
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