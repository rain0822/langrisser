<template>
  <div>
    <div class="is-size-3">夢幻模擬戰 兄貴材料目標計算機(v2.0.0)</div>
    <b-tabs>
      <b-tab-item :label="datum.label" v-for="datum in data" :key="datum.id">
        <div class="columns is-multiline is-mobile">
          <div class="column is-half" :class="[a.label === '目前練度' ? '' : 'has-background-warning']" v-for="a in datum.data" :key="a.label">
            <div class="is-size-4">{{a.label}}</div>
            <div class="columns is-multiline">
              <div class="column is-one-quarter" v-for="value in a.data">
                <b-field :label="value.label">
                  <b-select placeholder="---" v-model="value.num">
                    <option
                        v-for="option in value.items"
                        :value="option.num"
                        :key="option.label">
                      {{option.label}}
                    </option>
                  </b-select>
                </b-field>
                <div class="columns is-gapless">
                  <div class="column">
                    <figure class="image is-48x48">
                      <figure v-if="value.item1 === 1" class="image is-48x48"><img src="1.gif"></figure>
                      <figure v-if="value.item1 === 2" class="image is-48x48"><img src="2.gif"></figure>
                      <figure v-if="value.item1 === 3" class="image is-48x48"><img src="3.gif"></figure>
                      <figure v-if="value.item1 === 4" class="image is-48x48"><img src="4.gif"></figure>
                      <figure v-if="value.item1 === 5" class="image is-48x48"><img src="5.gif"></figure>
                      <figure v-if="value.item1 === 6" class="image is-48x48"><img src="6.gif"></figure>
                    </figure>
                  </div>
                  <div class="column">
                    <figure class="image is-48x48">
                      <figure v-if="value.item2 === 1" class="image is-48x48"><img src="1.gif"></figure>
                      <figure v-if="value.item2 === 2" class="image is-48x48"><img src="2.gif"></figure>
                      <figure v-if="value.item2 === 3" class="image is-48x48"><img src="3.gif"></figure>
                      <figure v-if="value.item2 === 4" class="image is-48x48"><img src="4.gif"></figure>
                      <figure v-if="value.item2 === 5" class="image is-48x48"><img src="5.gif"></figure>
                      <figure v-if="value.item2 === 6" class="image is-48x48"><img src="6.gif"></figure>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div class="columns is-multiline">
              <div class="column is-one-quarter" v-for="value in a.data3">
                <b-field :label="value.label">
                  <b-select placeholder="---" v-model="value.num">
                    <option
                        v-for="option in value.items"
                        :value="option.num"
                        :key="option.label">
                      {{option.label}}
                    </option>
                  </b-select>
                </b-field>
                <div class="columns is-gapless">
                  <div class="column">
                    <figure class="image is-48x48">
                      <figure v-if="value.item1 === 1" class="image is-48x48"><img src="1.gif"></figure>
                      <figure v-if="value.item1 === 2" class="image is-48x48"><img src="2.gif"></figure>
                      <figure v-if="value.item1 === 3" class="image is-48x48"><img src="3.gif"></figure>
                      <figure v-if="value.item1 === 4" class="image is-48x48"><img src="4.gif"></figure>
                      <figure v-if="value.item1 === 5" class="image is-48x48"><img src="5.gif"></figure>
                      <figure v-if="value.item1 === 6" class="image is-48x48"><img src="6.gif"></figure>
                    </figure>
                  </div>
                  <div class="column">
                    <figure class="image is-48x48">
                      <figure v-if="value.item2 === 1" class="image is-48x48"><img src="1.gif"></figure>
                      <figure v-if="value.item2 === 2" class="image is-48x48"><img src="2.gif"></figure>
                      <figure v-if="value.item2 === 3" class="image is-48x48"><img src="3.gif"></figure>
                      <figure v-if="value.item2 === 4" class="image is-48x48"><img src="4.gif"></figure>
                      <figure v-if="value.item2 === 5" class="image is-48x48"><img src="5.gif"></figure>
                      <figure v-if="value.item2 === 6" class="image is-48x48"><img src="6.gif"></figure>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div class="columns is-multiline">
              <div class="column is-one-quarter" v-for="value in a.data2">
                <b-field :label="value.label">
                  <b-select placeholder="---" v-model="value.num">
                    <option
                        v-for="option in value.items"
                        :value="option.num"
                        :key="option.label">
                      {{option.label}}
                    </option>
                  </b-select>
                </b-field>
                <div class="columns is-gapless">
                  <div class="column">
                    <figure v-if="value.item1 === 1" class="image is-48x48"><img src="1.gif"></figure>
                    <figure v-if="value.item1 === 2" class="image is-48x48"><img src="2.gif"></figure>
                    <figure v-if="value.item1 === 3" class="image is-48x48"><img src="3.gif"></figure>
                    <figure v-if="value.item1 === 4" class="image is-48x48"><img src="4.gif"></figure>
                    <figure v-if="value.item1 === 5" class="image is-48x48"><img src="5.gif"></figure>
                    <figure v-if="value.item1 === 6" class="image is-48x48"><img src="6.gif"></figure>
                  </div>
                  <div class="column">
                    <figure v-if="value.item2 === 1" class="image is-48x48"><img src="1.gif"></figure>
                    <figure v-if="value.item2 === 2" class="image is-48x48"><img src="2.gif"></figure>
                    <figure v-if="value.item2 === 3" class="image is-48x48"><img src="3.gif"></figure>
                    <figure v-if="value.item2 === 4" class="image is-48x48"><img src="4.gif"></figure>
                    <figure v-if="value.item2 === 5" class="image is-48x48"><img src="5.gif"></figure>
                    <figure v-if="value.item2 === 6" class="image is-48x48"><img src="6.gif"></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab-item>
    </b-tabs>

    <div class="is-size-4">庫存數量</div>
    <div class="columns">
      <div class="column" v-for="re in result" v-if="re.name !== '總計'">
        <b-field :label="re.name">
          <b-input placeholder="0" type="number" v-model="re.inventory">
          </b-input>
        </b-field>
      </div>
    </div>

    <b-button type="is-info" v-on:click="save">儲存</b-button>
    <b-button type="is-success" v-on:click="calculate">計算</b-button>

    <b-table :data="result" :columns="columns"></b-table>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { ToastProgrammatic as Toast } from 'buefy'

  export default {
    name: 'app',
    data() {

      let items1 = [
        {label: 5, num: 26},
        {label: 6, num: 24},
        {label: 7, num: 21},
        {label: 8, num: 16},
        {label: 9, num: 9},
        {label: 'MAX', num: 0},
      ];

      let items2 = [
        {label: 14, num: 48},
        {label: 15, num: 43},
        {label: 16, num: 37},
        {label: 17, num: 30},
        {label: 18, num: 22},
        {label: 19, num: 12},
        {label: 'MAX', num: 0}
      ];

      let items3 = [
        {label: 3, num: 35},
        {label: 4, num: 33},
        {label: 5, num: 30},
        {label: 6, num: 26},
        {label: 7, num: 21},
        {label: 8, num: 15},
        {label: 9, num: 8},
        {label: 'MAX', num: 0}
      ];

      let data = Vue.$localStorage.get('data');
      let version = Vue.$localStorage.get('version');

      let aInit = {
        atk: {label: '核心攻擊', item1: 2, item2: 6, num: 0, items: items2},
        def: {label: '核心防禦', item1: 1, item2: 6, num: 0, items: items2},
        hp: {label: '核心生存', item1: 1, item2: 6, num: 0, items: items2},
        other1: {label: '壓制戰法', item1: 2, item2: 6, num: 0, items: items1},
        other2: {label: '應急處理', item1: 1, item2: 3, num: 0, items: items1}
      };
      let aInit2 = {
        a: {label: '重裝步兵', item1: 1, item2: 6, num: 0, items: items1},
        b: {label: '高地勇士', item1: 2, item2: 3, num: 0, items: items1},
        c: {label: '假面女僕', item1: 2, item2: 4, num: 0, items: items1},
        d: {label: '狂獸人', item1: 1, item2: 3, num: 0, items: items1},
        e: {label: '狂戰士', item1: 2, item2: 6, num: 0, items: items1},
        f: {label: '食人巨魔', item1: 2, item2: 4, num: 0, items: items1},
        g: {label: '近衛步兵', item1: 1, item2: 6, num: 0, items: items1},
        h: {label: '暗黑衛隊', item1: 2, item2: 3, num: 0, items: items1},
        i: {label: '素體改造者', item1: 1, item2: 4, num: 0, items: items1}
      };

      let aInit3 = {
        atk: {label: '聯合攻擊', item1: 2, item2: 6, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 1, item2: 6, num: 0, items: items3},
        hp: {label: '聯合生命', item1: 2, item2: 6, num: 0, items: items3},
        other1: {label: '防空重甲', item1: 2, item2: 3, num: 0, items: items3},
        other2: {label: '孤軍奮戰', item1: 1, item2: 4, num: 0, items: items3}
      };

      let bInit = {
        atk: {label: '核心攻擊', item1: 5, item2: 4, num: 0, items: items2},
        def: {label: '核心防禦', item1: 1, item2: 4, num: 0, items: items2},
        hp: {label: '核心生存', item1: 1, item2: 4, num: 0, items: items2},
        other1: {label: '作戰續行', item1: 1, item2: 4, num: 0, items: items1},
        other2: {label: '反擊方陣', item1: 5, item2: 6, num: 0, items: items1}
      };
      let bInit2 = {
        a: {label: '重裝槍兵', item1: 1, item2: 4, num: 0, items: items1},
        b: {label: '重戟百夫長', item1: 1, item2: 6, num: 0, items: items1},
        c: {label: '姬武神', item1: 1, item2: 3, num: 0, items: items1},
        d: {label: '岩石巨人', item1: 5, item2: 6, num: 0, items: items1},
        e: {label: '熔岩巨人', item1: 1, item2: 3, num: 0, items: items1},
        f: {label: '近衛槍兵', item1: 1, item2: 3, num: 0, items: items1},
        g: {label: '暗影百夫長', item1: 5, item2: 6, num: 0, items: items1},
        h: {label: '水晶塑型者', item1: 5, item2: 6, num: 0, items: items1}
      };

      let bInit3 = {
        atk: {label: '聯合攻擊', item1: 1, item2: 4, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 5, item2: 4, num: 0, items: items3},
        hp: {label: '聯合生命', item1: 1, item2: 4, num: 0, items: items3},
        other1: {label: '鞏固防線', item1: 1, item2: 3, num: 0, items: items3},
        other2: {label: '浴血奮戰', item1: 5, item2: 6, num: 0, items: items3}
      };

      let cInit = {
        atk: {label: '核心攻擊', item1: 2, item2: 3, num: 0, items: items2},
        def: {label: '核心防禦', item1: 5, item2: 3, num: 0, items: items2},
        hp: {label: '核心生存', item1: 5, item2: 3, num: 0, items: items2},
        other1: {label: '集體衝鋒', item1: 2, item2: 3, num: 0, items: items1},
        other2: {label: '高速移動', item1: 5, item2: 6, num: 0, items: items1}
      };
      let cInit2 = {
        a: {label: '重裝騎兵', item1: 2, item2: 6, num: 0, items: items1},
        b: {label: '龍騎兵', item1: 5, item2: 4, num: 0, items: items1},
        c: {label: '骨犀', item1: 5, item2: 6, num: 0, items: items1},
        d: {label: '聖殿騎士', item1: 2, item2: 4, num: 0, items: items1},
        e: {label: '地獄犬', item1: 2, item2: 6, num: 0, items: items1},
        f: {label: '近衛騎兵', item1: 2, item2: 6, num: 0, items: items1},
        g: {label: '天琴親衛', item1: 2, item2: 4, num: 0, items: items1},
        h: {label: '皇家騎兵', item1: 2, item2: 3, num: 0, items: items1},
        i: {label: '獨角獸', item1: 2, item2: 6, num: 0, items: items1}
      };
      let cInit3 = {
        atk: {label: '聯合攻擊', item1: 5, item2: 3, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 2, item2: 3, num: 0, items: items3},
        hp: {label: '聯合生存', item1: 5, item2: 3, num: 0, items: items3},
        other1: {label: '精鋼鐵蹄', item1: 2, item2: 6, num: 0, items: items3},
        other2: {label: '奔襲破陣', item1: 5, item2: 4, num: 0, items: items3}
      };

      let dInit = {
        atk: {label: '核心攻擊', item1: 4, item2: 1, num: 0, items: items2},
        def: {label: '核心防禦', item1: 6, item2: 1, num: 0, items: items2},
        hp: {label: '核心生存', item1: 6, item2: 1, num: 0, items: items2},
        other1: {label: '水戰強化', item1: 6, item2: 1, num: 0, items: items1},
        other2: {label: '特技飛行', item1: 4, item2: 1, num: 0, items: items1}
      };
      let dInit2 = {
        a: {label: '皇家獅鷲', item1: 4, item2: 1, num: 0, items: items1},
        b: {label: '人魚統領', item1: 6, item2: 2, num: 0, items: items1},
        c: {label: '蜥蜴刀客', item1: 4, item2: 5, num: 0, items: items1},
        d: {label: '吸血蝙蝠', item1: 4, item2: 2, num: 0, items: items1},
        e: {label: '聖天馬', item1: 6, item2: 5, num: 0, items: items1},
        f: {label: '龍蝦巨獸', item1: 4, item2: 2, num: 0, items: items1},
        g: {label: '海怪', item1: 4, item2: 5, num: 0, items: items1},
        h: {label: '天使', item1: 6, item2: 1, num: 0, items: items1},
        i: {label: '石像鬼', item1: 6, item2: 2, num: 0, items: items1},
        j: {label: '鋼翼勇士', item1: 5, item2: 4, num: 0, items: items1}
      };
      let dInit3 = {
        atk: {label: '聯合攻擊', item1: 1, item2: 4, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 1, item2: 6, num: 0, items: items3},
        hp: {label: '聯合生存', item1: 1, item2: 4, num: 0, items: items3},
        other1: {label: '水靈加護', item1: 2, item2: 6, num: 0, items: items3},
        other2: {label: '地空協同', item1: 5, item2: 4, num: 0, items: items3}
      };

      let eInit = {
        atk: {label: '核心攻擊', item1: 4, item2: 2, num: 0, items: items2},
        def: {label: '核心防禦', item1: 3, item2: 2, num: 0, items: items2},
        hp: {label: '核心生存', item1: 3, item2: 2, num: 0, items: items2},
        other1: {label: '密林遊俠', item1: 3, item2: 2, num: 0, items: items1},
        other2: {label: '殺戮氣息', item1: 4, item2: 5, num: 0, items: items1}
      };
      let eInit2 = {
        a: {label: '天空射手', item1: 3, item2: 1, num: 0, items: items1},
        b: {label: '大精靈', item1: 4, item2: 2, num: 0, items: items1},
        c: {label: '暗精靈射手', item1: 4, item2: 1, num: 0, items: items1},
        d: {label: '投石車', item1: 4, item2: 1, num: 0, items: items1},
        e: {label: '暗殺者', item1: 3, item2: 5, num: 0, items: items1},
        f: {label: '突襲弩騎兵', item1: 4, item2: 1, num: 0, items: items1},
        g: {label: '緋霧女侍', item1: 3, item2: 1, num: 0, items: items1},
        h: {label: '旋風遊騎兵', item1: 4, item2: 5, num: 0, items: items1},
        i: {label: '武士', item1: 3, item2: 5, num: 0, items: items1},
        j: {label: '火弩狙擊手', item1: 4, item2: 1, num: 0, items: items1},
        k: {label: '影侍', item1: 4, item2: 5, num: 0, items: items1},
        l: {label: '地精騎士', item1: 1, item2: 4, num: 0, items: items1}
      };
      let eInit3 = {
        atk: {label: '聯合攻擊', item1: 2, item2: 3, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 2, item2: 4, num: 0, items: items3},
        hp: {label: '聯合生存', item1: 2, item2: 3, num: 0, items: items3},
        other1: {label: '對法特訓', item1: 1, item2: 4, num: 0, items: items3},
        other2: {label: '閃轉騰挪', item1: 5, item2: 3, num: 0, items: items3}
      };

      let fInit = {
        atk: {label: '核心攻擊', item1: 3, item2: 5, num: 0, items: items2},
        def: {label: '核心防禦', item1: 6, item2: 5, num: 0, items: items2},
        hp: {label: '核心生存', item1: 6, item2: 5, num: 0, items: items2},
        other1: {label: '虔誠信仰', item1: 3, item2: 2, num: 0, items: items1},
        other2: {label: '聖光護佑', item1: 6, item2: 5, num: 0, items: items1},
        other3: {label: '污穢鎧甲', item1: 3, item2: 1, num: 0, items: items1}
      };
      let fInit2 = {
        a: {label: '神官', item1: 6, item2: 5, num: 0, items: items1},
        b: {label: '神官騎士', item1: 3, item2: 2, num: 0, items: items1},
        c: {label: '狂熱者', item1: 3, item2: 1, num: 0, items: items1},
        d: {label: '重裝骷髏', item1: 3, item2: 2, num: 0, items: items1},
        e: {label: '驅魔師', item1: 3, item2: 5, num: 0, items: items1},
        f: {label: '火焰骷髏弓手', item1: 6, item2: 2, num: 0, items: items1},
        g: {label: '男巫', item1: 3, item2: 1, num: 0, items: items1},
        h: {label: '魔女', item1: 3, item2: 5, num: 0, items: items1},
        i: {label: '巫女', item1: 3, item2: 2, num: 0, items: items1},
        j: {label: '死靈騎士', item1: 6, item2: 5, num: 0, items: items1},
        k: {label: '蛛魔精靈', item1: 2, item2: 6, num: 0, items: items1}
      };
      let fInit3 = {
        atk: {label: '聯合攻擊', item1: 5, item2: 6, num: 0, items: items3},
        def: {label: '聯合防禦', item1: 5, item2: 3, num: 0, items: items3},
        hp: {label: '聯合生存', item1: 5, item2: 6, num: 0, items: items3},
        other1: {label: '聚精會神', item1: 2, item2: 6, num: 0, items: items3},
        other2: {label: '暗黑力量', item1: 1, item2: 3, num: 0, items: items3},
        other3: {label: '袪除不純', item1: 1, item2: 3, num: 0, items: items3}
      };

      if(!data || version !== '2.0.0') {
        data = {
          a: {
            id: 1,
            label: '步',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(aInit),
                data2: this.iterationCopy(aInit2),
                data3: this.iterationCopy(aInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(aInit),
                data2: this.iterationCopy(aInit2),
                data3: this.iterationCopy(aInit3)
              }
            }
          },
          b: {
            id: 2,
            label: '槍',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(bInit),
                data2: this.iterationCopy(bInit2),
                data3: this.iterationCopy(bInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(bInit),
                data2: this.iterationCopy(bInit2),
                data3: this.iterationCopy(bInit3)
              }
            }
          },
          c: {
            id: 3,
            label: '騎',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(cInit),
                data2: this.iterationCopy(cInit2),
                data3: this.iterationCopy(cInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(cInit),
                data2: this.iterationCopy(cInit2),
                data3: this.iterationCopy(cInit3)
              }
            }
          },
          d: {
            id: 4,
            label: '飛/水',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(dInit),
                data2: this.iterationCopy(dInit2),
                data3: this.iterationCopy(dInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(dInit),
                data2: this.iterationCopy(dInit2),
                data3: this.iterationCopy(dInit3)
              }
            }
          },
          e: {
            id: 5,
            label: '弓/刺',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(eInit),
                data2: this.iterationCopy(eInit2),
                data3: this.iterationCopy(eInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(eInit),
                data2: this.iterationCopy(eInit2),
                data3: this.iterationCopy(eInit3)
              }
            }
          },
          f: {
            id: 6,
            label: '法/僧/魔',
            data: {
              origin: {
                label: '目前練度',
                data: this.iterationCopy(fInit),
                data2: this.iterationCopy(fInit2),
                data3: this.iterationCopy(fInit3)
              },
              target: {
                label: '目標練度',
                data: this.iterationCopy(fInit),
                data2: this.iterationCopy(fInit2),
                data3: this.iterationCopy(fInit3)
              }
            }
          }
        }
      }

      return {
        data: data,
        items1: items1,
        items2: items2,
        result: [
          { id: 1, name: '精油', inventory: 0, amount: 0, total: 0},
          { id: 2, name: '鎖鏈', inventory: 0, amount: 0, total: 0},
          { id: 3, name: '背帶', inventory: 0, amount: 0, total: 0},
          { id: 4, name: '短褲', inventory: 0, amount: 0, total: 0},
          { id: 5, name: '手套', inventory: 0, amount: 0, total: 0},
          { id: 6, name: '噴霧', inventory: 0, amount: 0, total: 0},
          { id: 7, name: '總計', inventory: 0, amount: 0, total: 0},
        ],
        columns: [
          {
            field: 'name',
            label: '材料名稱'
          },
          {
            field: 'inventory',
            label: '庫存數量',
          },
          {
            field: 'total',
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
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 0; i < result2.length - 1; i++) {
          result2[i].amount = result.get(i + 1);
          result2[i].total = result2[i].amount - result2[i].inventory;
          sum2 += parseInt(result2[i].total);
          sum1 += parseInt(result2[i].inventory);
        }
        result2[result2.length - 1].total = sum2;
        result2[result2.length - 1].inventory = sum1;
      },
      save() {
        Vue.$localStorage.set('data', this.data, '1y');
        Vue.$localStorage.set('version', '2.0.0', '1y');
        Toast.open({
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
        if(origin.data.other3 && target.data.other3) this.calculate2(result, origin.data.other3, target.data.other3);


        this.calculate2(result, origin.data2.a, target.data2.a);
        this.calculate2(result, origin.data2.b, target.data2.b);
        this.calculate2(result, origin.data2.c, target.data2.c);
        this.calculate2(result, origin.data2.d, target.data2.d);
        this.calculate2(result, origin.data2.e, target.data2.e);
        this.calculate2(result, origin.data2.f, target.data2.f);
        this.calculate2(result, origin.data2.g, target.data2.g);
        if(origin.data2.h && target.data2.h) this.calculate2(result, origin.data2.h, target.data2.h);
        if(origin.data2.i && target.data2.i) this.calculate2(result, origin.data2.i, target.data2.i);
        if(origin.data2.j && target.data2.j) this.calculate2(result, origin.data2.j, target.data2.j);
        if(origin.data2.k && target.data2.k) this.calculate2(result, origin.data2.k, target.data2.k);
        if(origin.data2.l && target.data2.l) this.calculate2(result, origin.data2.l, target.data2.l);

        this.calculate2(result, origin.data3.atk, target.data3.atk);
        this.calculate2(result, origin.data3.def, target.data3.def);
        this.calculate2(result, origin.data3.hp, target.data3.hp);
        this.calculate2(result, origin.data3.other1, target.data3.other1);
        this.calculate2(result, origin.data3.other2, target.data3.other2);
        if(origin.data3.other3 && target.data3.other3) this.calculate2(result, origin.data3.other3, target.data3.other3);

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
