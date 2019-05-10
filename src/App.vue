<template>
  <div class="section">
    <div class="is-size-3">目前練度</div>

    <b-tabs>
      <b-tab-item label="步">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.a.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.a.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.a.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="壓制戰法">
              <b-select placeholder="---" v-model="data.a.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="應急處理">
              <b-select placeholder="---" v-model="data.a.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="槍">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.b.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.b.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.b.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="作戰續行">
              <b-select placeholder="---" v-model="data.b.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="反擊方陣">
              <b-select placeholder="---" v-model="data.b.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="騎">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.c.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.c.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.c.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="集體衝鋒">
              <b-select placeholder="---" v-model="data.c.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="高速移動">
              <b-select placeholder="---" v-model="data.c.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="飛/水">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.d.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.d.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.d.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="水戰強化">
              <b-select placeholder="---" v-model="data.d.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="特技飛行">
              <b-select placeholder="---" v-model="data.d.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="弓/刺">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.e.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.e.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.e.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="密林遊俠">
              <b-select placeholder="---" v-model="data.e.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="殺戮氣息">
              <b-select placeholder="---" v-model="data.e.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>
        </div>
      </b-tab-item>

      <b-tab-item label="法/僧/魔">
        <div class="columns">
          <div class="column">
            <b-field label="核攻">
              <b-select placeholder="---" v-model="data.f.atk.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核防">
              <b-select placeholder="---" v-model="data.f.def.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="核兵">
              <b-select placeholder="---" v-model="data.f.hp.num">
                <option
                    v-for="option in items2"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="虔誠信仰">
              <b-select placeholder="---" v-model="data.f.other1.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="聖光護佑">
              <b-select placeholder="---" v-model="data.f.other2.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
          </div>

          <div class="column">
            <b-field label="污穢鎧甲">
              <b-select placeholder="---" v-model="data.f.other3.num">
                <option
                    v-for="option in items1"
                    :value="option.num"
                    :key="option.label">
                  {{option.label}}
                </option>
              </b-select>
            </b-field>
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

export default {
  name: 'app',
  data() {

    let data = $cookies.get('data');
    if(!data) {
      data = {
        a: {
          atk: {item1: 2, item2: 6, num: 0},
          def: {item1: 1, item2: 6, num: 0},
          hp: {item1: 1, item2: 6, num: 0},
          other1: {item1: 2, item2: 6, num: 0},
          other2: {item1: 1, item2: 3, num: 0}
        },
        b: {
          atk: {item1: 5, item2: 4, num: 0},
          def: {item1: 1, item2: 4, num: 0},
          hp: {item1: 1, item2: 4, num: 0},
          other1: {item1: 1, item2: 4, num: 0},
          other2: {item1: 5, item2: 6, num: 0}
        },
        c: {
          atk: {item1: 2, item2: 3, num: 0},
          def: {item1: 5, item2: 3, num: 0},
          hp: {item1: 5, item2: 3, num: 0},
          other1: {item1: 2, item2: 3, num: 0},
          other2: {item1: 5, item2: 6, num: 0}
        },
        d: {
          atk: {item1: 4, item2: 1, num: 0},
          def: {item1: 6, item2: 1, num: 0},
          hp: {item1: 6, item2: 1, num: 0},
          other1: {item1: 6, item2: 1, num: 0},
          other2: {item1: 4, item2: 1, num: 0}
        },
        e: {
          atk: {item1: 4, item2: 2, num: 0},
          def: {item1: 3, item2: 2, num: 0},
          hp: {item1: 3, item2: 2, num: 0},
          other1: {item1: 3, item2: 2, num: 0},
          other2: {item1: 4, item2: 5, num: 0}
        },
        f: {
          atk: {item1: 3, item2: 5, num: 0},
          def: {item1: 6, item2: 5, num: 0},
          hp: {item1: 6, item2: 5, num: 0},
          other1: {item1: 3, item2: 2, num: 0},
          other2: {item1: 6, item2: 5, num: 0},
          other3: {item1: 3, item2: 3, num: 0}
        }
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
        { id: 1, name: '1精油', amount: 0},
        { id: 2, name: '2鎖鏈', amount: 0},
        { id: 3, name: '3背帶', amount: 0},
        { id: 4, name: '4短褲', amount: 0},
        { id: 5, name: '5手套', amount: 0},
        { id: 6, name: '6噴霧', amount: 0},
      ],
      columns: [
        {
          field: 'name',
          label: '材料名稱'
        },
        {
          field: 'amount',
          label: '所剩材料數量',
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

      this.calculate1(result, data.a);
      this.calculate1(result, data.b);
      this.calculate1(result, data.c);
      this.calculate1(result, data.d);
      this.calculate1(result, data.e);
      this.calculate1(result, data.f);

      let result2 = this.result;

      for(let i = 0; i < result2.length; i++ ) {
          result2[i].amount = result.get(i + 1);
      }
    },
    save() {
      $cookies.set('data', this.data, '1y');
      this.$toast.open({
        message: '儲存成功',
        type: 'is-success'
      })
    },
    calculate1(result, data) {
      this.calculate2(result, data.atk);
      this.calculate2(result, data.def);
      this.calculate2(result, data.hp);
      this.calculate2(result, data.other1);
      this.calculate2(result, data.other2);
      if(data.other3) {
        this.calculate2(result, data.other3);
      }
    },
    calculate2(result, data) {
      result.set(data.item1, result.get(data.item1) + data.num);
      result.set(data.item2, result.get(data.item2) + data.num);
    }
  }
}
</script>

<style>
</style>
