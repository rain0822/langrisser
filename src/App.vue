<template>
  <div class="section">
    <div class="is-size-3">夢幻模擬戰 計算機</div>
    <b-tabs>
      <b-tab-item :label="datum.label" v-for="datum in data" :key="datum.id">
        <div class="columns is-multiline is-mobile">
          <div class="column is-half" v-for="a in datum.data">
            <div class="is-size-4">{{a.label}}</div>
            <div class="columns">
              <div class="column" v-for="value in a.data">
                <b-field :label="value.label">
                  <b-select placeholder="---" v-model="value.num">
                    <option
                        v-for="option in items2"
                        :value="option.num"
                        :key="option.label">
                      {{option.label}}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </div>
        </div>
      </b-tab-item>
    </b-tabs>

    <b-button type="is-info" v-on:click="save">儲存</b-button>
    <b-button type="is-success" v-on:click="calculate">計算</b-button>

    <b-table :data="result" :columns="columns"></b-table>

  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'app',
  data() {

    let data = Vue.$localStorage.get('data');
    let aInit = {
      atk: {label: '核心攻擊', item1: 2, item2: 6, num: 0},
      def: {label: '核心防禦', item1: 1, item2: 6, num: 0},
      hp: {label: '核心生存', item1: 1, item2: 6, num: 0},
      other1: {label: '壓制戰法', item1: 2, item2: 6, num: 0},
      other2: {label: '應急處理', item1: 1, item2: 3, num: 0}
    };

    let bInit = {
      atk: {label: '核心攻擊', item1: 5, item2: 4, num: 0},
      def: {label: '核心防禦', item1: 1, item2: 4, num: 0},
      hp: {label: '核心生存', item1: 1, item2: 4, num: 0},
      other1: {label: '作戰續行', item1: 1, item2: 4, num: 0},
      other2: {label: '反擊方陣', item1: 5, item2: 6, num: 0}
    };

    let cInit = {
      atk: {label: '核心攻擊', item1: 2, item2: 3, num: 0},
      def: {label: '核心防禦', item1: 5, item2: 3, num: 0},
      hp: {label: '核心生存', item1: 5, item2: 3, num: 0},
      other1: {label: '集體衝鋒', item1: 2, item2: 3, num: 0},
      other2: {label: '高速移動', item1: 5, item2: 6, num: 0}
    };

    let dInit = {
      atk: {label: '核心攻擊', item1: 4, item2: 1, num: 0},
      def: {label: '核心防禦', item1: 6, item2: 1, num: 0},
      hp: {label: '核心生存', item1: 6, item2: 1, num: 0},
      other1: {label: '水戰強化', item1: 6, item2: 1, num: 0},
      other2: {label: '特技飛行', item1: 4, item2: 1, num: 0}
    };

    let eInit = {
      atk: {label: '核心攻擊', item1: 4, item2: 2, num: 0},
      def: {label: '核心防禦', item1: 3, item2: 2, num: 0},
      hp: {label: '核心生存', item1: 3, item2: 2, num: 0},
      other1: {label: '密林遊俠', item1: 3, item2: 2, num: 0},
      other2: {label: '殺戮氣息', item1: 4, item2: 5, num: 0}
    };

    let fInit = {
      atk: {label: '核心攻擊', item1: 3, item2: 5, num: 0},
      def: {label: '核心防禦', item1: 6, item2: 5, num: 0},
      hp: {label: '核心生存', item1: 6, item2: 5, num: 0},
      other1: {label: '虔誠信仰', item1: 3, item2: 2, num: 0},
      other2: {label: '聖光護佑', item1: 6, item2: 5, num: 0},
      other3: {label: '污穢鎧甲', item1: 3, item2: 3, num: 0}
    };

    if(!data) {
      data = {
        a: {
          id: 1,
          label: '步',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(aInit)},
              target: {label: '目標練度', data: this.iterationCopy(aInit)
            }
          }
        },
        b: {
          id: 2,
          label: '槍',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(bInit)},
              target: {label: '目標練度', data: this.iterationCopy(bInit)
            }
          }
        },
        c: {
          id: 3,
          label: '騎',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(cInit)},
              target: {label: '目標練度', data: this.iterationCopy(cInit)
            }
          }
        },
        d: {
          id: 4,
          label: '飛/水',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(dInit)},
              target: {label: '目標練度', data: this.iterationCopy(dInit)
            }
          }
        },
        e: {
          id: 5,
          label: '弓/刺',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(eInit)},
              target: {label: '目標練度', data: this.iterationCopy(eInit)
            }
          }
        },
        f: {
          id: 6,
          label: '法/僧/魔',
          data: {
            origin: {
              label: '目前練度', data: this.iterationCopy(fInit)},
              target: {label: '目標練度', data: this.iterationCopy(fInit)
            }
          }
        },
      }
    }

    return {
      data: data,
      items1: [
        {label: 5, num: 26},
        {label: 6, num: 24},
        {label: 7, num: 21},
        {label: 8, num: 16},
        {label: 9, num: 9},
        {label: 'MAX', num: 0},
      ],
      items2: [
        {label: 14, num: 48},
        {label: 15, num: 43},
        {label: 16, num: 37},
        {label: 17, num: 30},
        {label: 18, num: 22},
        {label: 19, num: 12},
        {label: 'MAX', num: 0}
      ],
      result: [
        { id: 1, name: '精油', amount: 0},
        { id: 2, name: '鎖鏈', amount: 0},
        { id: 3, name: '背帶', amount: 0},
        { id: 4, name: '短褲', amount: 0},
        { id: 5, name: '手套', amount: 0},
        { id: 6, name: '噴霧', amount: 0},
        { id: 7, name: '總計', amount: 0},
      ],
      columns: [
        {
          field: 'name',
          label: '材料名稱'
        },
        {
          field: 'amount',
          label: '離目標所剩材料數量',
        }
      ]
    }
  },
  methods: {
    calculate() {
      let result = new Map();

      result.set(1, 0);
      result.set(2, 0);
      result.set(3, 0);
      result.set(4, 0);
      result.set(5, 0);
      result.set(6, 0);

      let data = this.data;

      this.calculate1(result, data.a.data.origin, data.a.data.target);
      this.calculate1(result, data.b.data.origin, data.b.data.target);
      this.calculate1(result, data.c.data.origin, data.c.data.target);
      this.calculate1(result, data.d.data.origin, data.d.data.target);
      this.calculate1(result, data.e.data.origin, data.e.data.target);
      this.calculate1(result, data.f.data.origin, data.f.data.target);

      let result2 = this.result;
      let sum = 0;
      for(let i = 0; i < result2.length - 1; i++ ) {
        sum += result.get(i + 1);
        result2[i].amount = result.get(i + 1);
      }
      result2[result2.length - 1].amount = sum;
    },
    save() {
      Vue.$localStorage.set('data', this.data, '1y');
      this.$toast.open({
        message: '儲存成功',
        type: 'is-success'
      })
    },
    calculate1(result, origin, target) {
      this.calculate2(result, origin.data.atk, target.data.atk);
      this.calculate2(result, origin.data.def, target.data.def);
      this.calculate2(result, origin.data.hp, target.data.hp);
      this.calculate2(result, origin.data.other1, target.data.other1);
      this.calculate2(result, origin.data.other2, target.data.other2);
      if(origin.data.other3 && target.data.other3) {
        this.calculate2(result, origin.data.other3, target.data.other3);
      }
    },
    calculate2(result, origin, target) {
      let num = origin.num - target.num;
      num = num > 0 ? num : 0;
      result.set(origin.item1, result.get(origin.item1) + num);
      result.set(origin.item2, result.get(origin.item2) + num);
    },
    iterationCopy(src) {
      return JSON.parse(JSON.stringify(src));
    }
  }
}
</script>

<style>
</style>
