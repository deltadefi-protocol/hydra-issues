import { js_get_required_inputs_to_resolve } from "@sidan-lab/whisky-js-nodejs";
import txs from "./txs.json";

const main = async () => {
  for (const txHex of txs) {
    const txIns = JSON.parse(
      js_get_required_inputs_to_resolve(txHex).get_data()
    );
    const targetInput =
      "c78930879716ae7726eff3b8ecc38d7093efcfb45bc7137bf8abcd25f47e57ae#512";
    for (const txIn of txIns) {
      if (txIn === targetInput) {
        console.log("Found target tx, txHex: ", txHex);
      }
    }
  }
};

main();
