HOW TO EDIT THE SPEECH LIBRARY
===============================
Each file topic1.js ... topic12.js is ONE topic (the dropdown heading) with its speeches inside.

EDIT a speech:    open the topic file, change the text between the backticks ` `.
ADD a subtopic:   copy one  { title:{...}, speech:{...} },  block inside "items: [ ... ]", paste it
                  after another block, then change the en / hi / mr texts.
                  (If you only have English, copy the English into hi and mr for now.)
DELETE:           remove the whole { ... }, block.
ADD a new topic:  copy topic12.js to topic13.js, change  id: "t13", order: 13  and the texts, then in
                  index.html add this line next to the others:  <script src="data/lib/topic13.js"></script>
Order of topics follows the "order" number.
Keep the commas, quotes and backticks exactly like the examples.
