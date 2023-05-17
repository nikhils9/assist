window.Aiken.initSearch([{"doc":"assist/signing","title":"verify_multisig","content":"verify_multisig(\n  transaction: Transaction,\n  vks: List&lt;Hash&lt;Blake2b_224, VerificationKey&gt;&gt;,\n  minimum: Int,\n) -&gt; Bool\n Check if the list of signatures inside a transaction for a minimum amount\n of signatures from a list verification keys.\n\n ```aiken\n signing.verify_multisig(context.transaction, [#&quot;&quot;, #&quot;acab&quot;], 0) == False\n signing.verify_multisig(context.transaction, [#&quot;8f7b0ce283a92df9a3b69ac0b8f10d8bc8bcf8fbd1fe72596ee8bd6c&quot;], 1) == True\n ```","url":"assist/signing.html#verify_multisig"},{"doc":"assist/signing","title":"verify_sig","content":"verify_sig(\n  transaction: Transaction,\n  vk: Hash&lt;Blake2b_224, VerificationKey&gt;,\n) -&gt; Bool\n Check if the list of signatures inside a transaction contains the\n verification key.\n\n ```aiken\n signing.verify_sig(context.transaction, #&quot;acab&quot;) == False\n signing.verify_sig(context.transaction, #&quot;8f7b0ce283a92df9a3b69ac0b8f10d8bc8bcf8fbd1fe72596ee8bd6c&quot;) == True\n ```","url":"assist/signing.html#verify_sig"},{"doc":"assist/signing","title":"assist/signing","content":" This module includes code to help with transaction signatures.\n\n All signatures are assumed to be verification keys.","url":"assist/signing.html"},{"doc":"assist/find","title":"first_input_index","content":"first_input_index(inputs: List&lt;Input&gt;) -&gt; Int\n Find the first input output reference index.\n Output references have the form TxId#Idx, this function\n extracts the Idx part. If nothing is found then error.\n\n ```aiken\n find.first_input_index(tx.inputs)\n ```","url":"assist/find.html#first_input_index"},{"doc":"assist/find","title":"first_input_txid","content":"first_input_txid(inputs: List&lt;Input&gt;) -&gt; ByteArray\n Find the first input output reference transaction id hash.\n Output references have the form TxId#Idx, this function\n extracts the TxId part. If nothing is found then error.\n\n ```aiken\n find.first_input_index(tx.inputs)\n ```","url":"assist/find.html#first_input_txid"},{"doc":"assist/find","title":"input_by_addr","content":"input_by_addr(inputs: List&lt;Input&gt;, addr: Address) -&gt; Input\n Find the first occurrence of an input by a specific address. If nothing\n is found then error. The address here is an exact match, pkh and sc.\n\n ```aiken\n find.input_by_addr(tx.reference_inputs, ref_addr)\n ```","url":"assist/find.html#input_by_addr"},{"doc":"assist/find","title":"input_by_ref","content":"input_by_ref(inputs: List&lt;Input&gt;, out_ref: OutputReference) -&gt; Input\n Find an input by an output reference. If nothing is found then error. \n Similar to the builtin function in stdlib but auto errors instead of\n returning an Option.\n\n ```aiken\n find.input_by_ref(tx.inputs, out_ref)\n ```","url":"assist/find.html#input_by_ref"},{"doc":"assist/find","title":"output_by_addr","content":"output_by_addr(outputs: List&lt;Output&gt;, addr: Address) -&gt; Output\n Find the first occurrence of an output by a specific address. If nothing\n is found then error. The address here is an exact match, pkh and sc.\n\n ```aiken\n find.output_by_addr(tx.outputs, your_address)\n ```","url":"assist/find.html#output_by_addr"},{"doc":"assist/find","title":"output_datum_by_addr","content":"output_datum_by_addr(outputs: List&lt;Output&gt;, addr: Address) -&gt; Data\n Find the first occurence of output datum by some address. If nothing is\n found then error.\n\n ```aiken\n expect datum: Datum = find.output_datum_by_addr(tx.outputs, this_address)\n ```","url":"assist/find.html#output_datum_by_addr"},{"doc":"assist/find","title":"stake_reward_by_sc","content":"stake_reward_by_sc(\n  withdraws: Dict&lt;StakeCredential, Int&gt;,\n  stake_credential: StakeCredential,\n) -&gt; Int\n Find the staking reward amount in loveace for some stake credential.\n If no rewards are available then error. This is a great method for\n checking on-chain staking rewards and withdrawal validation.\n\n ```aiken\n find.stake_reward_by_sc(tx.withdrawals, datum.wallet.sc)\n ```","url":"assist/find.html#stake_reward_by_sc"},{"doc":"assist/find","title":"assist/find","content":" This module includes code for finding various aspects of a validating\n transaction. \n","url":"assist/find.html"},{"doc":"tests/fake_tx","title":"test_input","content":"test_input() -&gt; Input\n A fake input used for testing.","url":"tests/fake_tx.html#test_input"},{"doc":"tests/fake_tx","title":"test_output","content":"test_output() -&gt; Output\n A fake output used for testing.","url":"tests/fake_tx.html#test_output"},{"doc":"tests/fake_tx","title":"test_tx","content":"test_tx() -&gt; Transaction\n A fake transaction used for testing.","url":"tests/fake_tx.html#test_tx"},{"doc":"tests/fake_tx","title":"test_datum","content":"test_datum: ByteArray = #&quot;acabbeeffacecafe&quot;\n","url":"tests/fake_tx.html#test_datum"},{"doc":"tests/fake_tx","title":"tests/fake_tx","content":"","url":"tests/fake_tx.html"},{"doc":"assist/values","title":"compute_hash","content":"compute_hash(target: Value) -&gt; ByteArray\n Compute the sha3_256 hash of a value by merklizing the policy id, asset\n name, and quantity. Empty values return the empty by string.\n\n ```aiken\n values.compute_hash(validating_value)\n ```","url":"assist/values.html#compute_hash"},{"doc":"assist/values","title":"contains","content":"contains(target: Value, total: Value) -&gt; Bool\n Prove that the target value is contained inside another value. Each token\n inside the target must exist inside the total value. The quantity of each\n token must be at least the target amount or greater.\n\n ```aiken\n values.contain(payment_value, output_value)\n ```","url":"assist/values.html#contains"},{"doc":"assist/values","title":"multiply","content":"multiply(val: Value, n: Int) -&gt; Value\n Multiply some value by `n`. Its just a linear multiplier to the quantity\n of each token.\n\n ```aiken\n values.multiply(bundle_value, bundle_size)\n ```","url":"assist/values.html#multiply"},{"doc":"assist/values","title":"unique_token_name","content":"unique_token_name(txid: ByteArray, idx: Int, prefix: ByteArray) -&gt; ByteArray\n Calculate a unique token name from a TxId#Idx and prefix. Can be combined\n with the find module to create unique token names from the first input\n utxo inside the transaction.\n\n ```aiken\n values.unique_token_name(tx_id, tx_idx, prefix_333)\n ```","url":"assist/values.html#unique_token_name"},{"doc":"assist/values","title":"prefix_100","content":"prefix_100: ByteArray = #&quot;2831303029&quot;\n CIP68 (100) Reference Token Prefix","url":"assist/values.html#prefix_100"},{"doc":"assist/values","title":"prefix_222","content":"prefix_222: ByteArray = #&quot;2832323229&quot;\n CIP68 (222) Non-Fungible Token Prefix","url":"assist/values.html#prefix_222"},{"doc":"assist/values","title":"prefix_333","content":"prefix_333: ByteArray = #&quot;2833333329&quot;\n CIP68 (333) Fungible Token Prefix","url":"assist/values.html#prefix_333"},{"doc":"assist/values","title":"prefix_444","content":"prefix_444: ByteArray = #&quot;2834343429&quot;\n CIP68 (444) Semi-Fungible Token Prefix","url":"assist/values.html#prefix_444"},{"doc":"assist/values","title":"assist/values","content":" This module includes code to help with various value manipulations and comparisons.\n The prefix for various cip68 tokens are included.\n","url":"assist/values.html"},{"doc":"assist/count","title":"script_inputs","content":"script_inputs(inputs: List&lt;Input&gt;, script_addr: Address, amount: Int) -&gt; Bool\n Verify that the number of inputs from a specific script is equal the amount\n intended in the contract. The amount must be exact with the counter.\n\n ```aiken\n count.script_inputs(tx.inputs, this_script_addr, 1)\n count.script_inputs(tx.inputs, that_script_addr, 2)\n ```","url":"assist/count.html#script_inputs"},{"doc":"assist/count","title":"script_outputs","content":"script_outputs(outputs: List&lt;Output&gt;, script_addr: Address, amount: Int) -&gt; Bool\n Verify that the number of outputs from a specific script is equal the amount\n intended in the contract. The amount must be exact with the counter.\n\n ```aiken\n count.script_outputs(tx.outputs, this_script_addr, 1)\n count.script_outputs(tx.outputs, that_script_addr, 2)\n ```","url":"assist/count.html#script_outputs"},{"doc":"assist/count","title":"assist/count","content":" This module includes code for counting the number of inputs and outputs \n inside a transaction by a specific address.\n\n The amounts are always assumed to be exact.","url":"assist/count.html"},{"doc":"assist/payout","title":"at_least","content":"at_least(pay_address: Address, pay_value: Value, outputs: List&lt;Output&gt;) -&gt; Bool\n Find the first occurrence of an output that contains at least some specific\n value at some address. If nothing is found then return False. This function\n does not search for an exact UTxO match.\n\n ```aiken\n payout.at_least(wallet_addr, just_token_value, tx.outputs)\n ```","url":"assist/payout.html#at_least"},{"doc":"assist/payout","title":"cont","content":"cont(pay_address: Address, outputs: List&lt;Output&gt;) -&gt; Bool\n Find the first occurrence of an output at some address. If nothing is \n found then return False. This function does not search by value.\n\n ```aiken\n payout.cont(that_script_addr, tx.outputs)\n ```","url":"assist/payout.html#cont"},{"doc":"assist/payout","title":"exact","content":"exact(pay_address: Address, pay_value: Value, outputs: List&lt;Output&gt;) -&gt; Bool\n Find the first occurrence of an exact output that matches a specific\n address and value. If nothing is found then return False.\n\n ```aiken\n payout.find_exact(wallet_addr, validating_value, tx.outputs)\n ```","url":"assist/payout.html#exact"},{"doc":"assist/payout","title":"assist/payout","content":" This module includes code to help with payout logic.\n","url":"assist/payout.html"},{"doc":"assist/addresses","title":"create_address","content":"create_address(\n  pkh: Hash&lt;Blake2b_224, VerificationKey&gt;,\n  sc: Hash&lt;Blake2b_224, VerificationKey&gt;,\n) -&gt; Address\n Creates a enterprise or base address from the public key hash and stake\n credential. An empty sc means enterpise address by default.\n\n ```aiken\n addresses.create_address(#&quot;acab&quot;, #&quot;&quot;)\n addresses.create_address(datum.wallet.pkh, datum.wallet.sc)\n ```","url":"assist/addresses.html#create_address"},{"doc":"assist/addresses","title":"create_script_address","content":"create_script_address(\n  pkh: Hash&lt;Blake2b_224, Script&gt;,\n  sc: Hash&lt;Blake2b_224, Script&gt;,\n) -&gt; Address\n Creates an address for a smart contract. The type does not mix address\n types. Staked smart contracts are contracts as well. An empty sc is\n assumed to be not staked.\n\n ```aiken\n addresses.create_script_address(#&quot;acab&quot;, #&quot;&quot;)\n addresses.create_script_address(ref_datum.sale_script.pkh, ref_datum.sale_script.sc)\n ```","url":"assist/addresses.html#create_script_address"},{"doc":"assist/addresses","title":"assist/addresses","content":" This module includes code to help create proper wallet and script addresses.\n\n Empty keys are assumed to be on purpose.","url":"assist/addresses.html"},{"doc":"assist/data","title":"input_datum","content":"input_datum(possible_input: Input) -&gt; Data\n Find the datum data on an input or error. The data is assumed\n to be an inline datum.\n\n ```aiken\n expect datum: Datum = data.input_datum(this_input)\n ```","url":"assist/data.html#input_datum"},{"doc":"assist/data","title":"output_datum","content":"output_datum(possible_output: Output) -&gt; Data\n Find the datum data on an output or error. The data is assumed\n to be an inline datum.\n\n ```aiken\n expect datum: Datum = data.output_datum(that_output)\n ```","url":"assist/data.html#output_datum"},{"doc":"assist/data","title":"assist/data","content":" This module includes code for extracting data from a potential \n inline datum on either an input or output.\n","url":"assist/data.html"},{"doc":"assist/maths","title":"base_q","content":"base_q(n: Int, q: Int) -&gt; List&lt;Int&gt;\n Convert a number `n` in base 10 into some base `q`. This method\n should scale with any number and any logical base.\n\n ```aiken\n maths.base_q(123, 7)\n ```","url":"assist/maths.html#base_q"},{"doc":"assist/maths","title":"gcd","content":"gcd(a: Int, b: Int) -&gt; Int\n Computes greatest common divisor of two numbers.\n\n ```aiken\n maths.gcd(20, 15)\n ```","url":"assist/maths.html#gcd"},{"doc":"assist/maths","title":"list_powmod","content":"list_powmod(lst: List&lt;Int&gt;, g: Int, q: Int) -&gt; Int\n Computes the power mod product of a list of integers.\n\n ```aiken\n maths.list_pow_mod([1,2,3], 2, 19)\n ```","url":"assist/maths.html#list_powmod"},{"doc":"assist/maths","title":"list_product","content":"list_product(lst: List&lt;Int&gt;) -&gt; Int\n Computes the product of a list of integers.\n\n ```aiken\n maths.list_product([1,2,3])\n ```","url":"assist/maths.html#list_product"},{"doc":"assist/maths","title":"powmod","content":"powmod(n: Int, e: Int, q: Int) -&gt; Int\n Calculate `n` to the power of `e` modulo `q` using the exponentiation by \n squaring method. At each multiplication a modulo is calculated, allowing\n very large power mods.\n\n ```aiken\n maths.powmod(3, 2, 5)\n ```","url":"assist/maths.html#powmod"},{"doc":"assist/maths","title":"to_int","content":"to_int(self: ByteArray) -&gt; Int\n Convert a hexadecimal bytearray into its base 10 representation. This\n only works with even length bytearrays so arbitrary numbers in hexadecimal\n form will not in general work.\n\n ```aiken\n maths.to_int(#&quot;acab&quot;)\n ```","url":"assist/maths.html#to_int"},{"doc":"assist/maths","title":"assist/maths","content":" This module includes code for various maths.\n\n","url":"assist/maths.html"}]);