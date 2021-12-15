var djikstraAlgorithm = (startNode) => {
   let distances = {};

   // Stores the reference to previous nodes
   let prev = {};
   let pq = new PriorityQueue(this.nodes.length * this.nodes.length);

   // Set distances to all nodes to be infinite except startNode
   distances[startNode] = 0;
   pq.enqueue(startNode, 0);
   this.nodes.forEach(node => {
      if (node !== startNode) distances[node] = Infinity;
      prev[node] = null;
   });

   while (!pq.isEmpty()) {
      let minNode = pq.dequeue();
      let currNode = minNode.data;
      let weight = minNode.priority;
      this.edges[currNode].forEach(neighbor => {
         let alt = distances[currNode] + neighbor.weight;
         if (alt < distances[neighbor.node]) {
            distances[neighbor.node] = alt;
            prev[neighbor.node] = currNode;
            pq.enqueue(neighbor.node, distances[neighbor.node]);
         }
      });
   }
   return distances;
}

//Start of my code

var example = `1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`

var puzzle = `6899398559981949547258793854297238998777719749798917159796618899687398467399925379577862587989991474
5379942478988734273122988989385757497466236693289192366951834829459291799682979611288519663692596298
8798287597929689897189697998519899536166814996869871877395181888988947899479999184396264959716187851
3868296316264598486169599954488593277989992991991613957171593837586927879692269999584919299198529729
7719999887667929137997159819697988999199983984946983118579886899976279796963391897163981988846896135
6739998189663927629889269938986791869444999919267994997136897877889835991768187898799499829977988394
7988583788649299829879981514848137294864722989699668788896499791829699377999859897635314659966261481
9992969672797892589791491158982982492585889799536977249441763249875986327169556286251698984997749818
9718374758574848624698919991181836656698967894599118493858464975792129225978588996976237797737894195
1893825969777924969931987857946995882974888995731816998669193676749873968799711398866998177979689789
3759795779766278838519949548487968384748596657715448479999877448999698477273113999976952939797999137
3792869878699914632622973899759161375991948988793488366996769987961995611928393687767993719868399894
9942897968869298678989516879984599626794899598717691899918359372779984892421689984859112959924689472
8986974958287449242678124196999969497867859938139817219596259977917899879991996999997235251449992892
9393932589987693287868871994537751739997998929291989863497289983976779984189929239897861797119974696
7644877627835923851699265145919979549787871681487584964459776917939961517883677942691588595752298597
7782917899979456965627993989999875893695969689956787938699999771786696989657496171872249318863992988
9699939979999999188268818579888611984999383488981128852596652999813388975989998987488198974791621986
8855949448389977757762785216898414926767698918989963979758999245519788976559869884922771769995695998
6161594972855728799875239948997799599786498788998987839599389797799699385379996998569798848273881991
8849879987995512895983617913392719961983866984975773748976999998979597796629879852188317626397354577
9918714945968972949991887946698488358199888699313826499427999686399169695899988919319799999767473199
5996524691383767631868413993879879289397729799167798829749158289796475719355781941897988959185871995
3671548863949999867599962616976992189997857965187417679377989897595864996189959688921869297998639168
9899888869899457597989991627522994397189991995699897597826952691878696997929893652899411896967929714
7998712697173966917539799489999488829998991615298985594968978829817799698218888399495847464799892896
8697591999289894676979499959726714169871796989826898599626691781699518598585758896419999659969796999
1596769779967498689759885927995189958876981979299351276266375179877391588176879938818569815468999951
9239936979789997972953675459579557995999399997824798899789819389488399998279899482891999869979466297
9862961336489166685698953899736173894695919998296115528189181614387928771489629999856145935996999959
9878796372687498958875478489799487856191971776591798688447913949795879947797267695974595998335766237
3579669986295599447968388999854657533645686894697829945854677988979973948297959175943579195981329558
9889879471197697996865286985852894979699196587598788896498174998988231138617198319985699429879936198
2569929999497772861549279955599759948256671345237589589916773999815195699395998996819598789979214958
2299796872747192635975872966984397912981917297947877844498981195646966824799588896388875584894887662
8897985828526798389979415947284977849996919989826911954671364488599884946996369936998912399219399559
9789869867396839999794988798381369977895979797377699897983873649969879997516315989217888649641593354
9396559295496899449797995999149878148992991887655578998575948899928139657986829949982988388718488968
1219872929688491168976392574875837678818865159629598999856821431859496974969997779589959997389869911
8677996932758699491567769569979887967994199496193284699937779232863993395713788876689947666888699642
6895859796959369982468161218818996999219995982889899867816999154828893696797787199799192984141799892
9724999698987799578316156912172451755981187297873997274399973799915981163774282986481193967782445747
6629975198595889624662945178181299389597998895999894925874697799194599458641859689691891729993275966
9937388695852751794123981948862993181157883278997199253248199592694498999728968898493199131992897875
8138652793591618786586782753999971993578956979797747264617698541297598388968168128848889925191821626
9952193671689277294778995937282491895888171947796739879498547893848388899738979951915599469754998574
5912618789999244872297919879988729117113889566994789997491998999897479714697269992876829898925722782
6992999529957852864712993868998979828846391749534732488988799281871998854992898895999755565696235276
1918668999887419713511881918358999837788938499119795987839895699458923699958379545795179359893659981
6784355989968822853988782395998772939751889862487297199998138254875217989839579791569689918838658899
9597998247788781937583528972969838997798789881799827999894798768285889889879791851473839999878691879
9999989795754894916776297971983688114959129819988685418477379813178929998469568659199968963983768269
9281879896799992299299871778548299974689797199999969199197279938972297719824957838991728399748196894
7358681176989594998874889389138896285912998287398968899257759136791787297999993649458864791768965682
5999887851998697967294538271397663967177946959996187999988882891859538977789979696896296919918999991
7982476991893925899167897294999974788899847819989761986287999544985576888479297375999574968587795164
7788979839695796995933973481446879998989833997777995979988298199999882181147396354994982994786949794
8386149885499696797618975196985997479982968986499698195296791591883912991949988762748856486857617586
1969826289965887984793739999296589399339415889778382714486729519779718418839976599868445929175989287
5953911181958986893699968848839918692897591986992168529255885788876888466867589587748393391193596777
4781988436596599788498955986699591717795727892878591977997174898577915614825899859214849879969946987
7993599858969771875133776815431596997826888544169999898857168147119977935799859919518869724514947698
6483653999998934548388893599245397184767899457972988939286667436998992114798899289398916986979988919
8239538889562698171887886783189959593198687528889836726598985989985997974398578868599359879999179896
5187194954785929819984975598975986868378762999749895637919879916556679887624788396869697134768988979
9798388189853995498798991977659999779479985378697685596953999499972477435996474687499698698953551991
8669995825358857988899699719459511999943338925868799469778759891391968767197858151487512895154964572
7186188958519978986196789958996399498919899525667947197263297931699935947847793276917899579499221359
8868827787956847877438899168279879828298639978975855976933446549889139796168247228469959897765693891
1119949798597699992889737692899988983742759119263697767998868669197235699836794996428591381161567838
2875274999282589569995398511588292924979498989525839668898996664951547671993787386498763984994859694
9969783989199983979678473715266984596998186719185694117834684699699673598616644229921935499699291873
7964759549738689149189129463479486738349611839919955791999939919875888998697729715298423918988984994
2788259353899786474729989945949859275289299119759689193972999214769598979117967954989699889899958658
9299647982219985928831575638982136781891865659193528377991845999569979779876472421966918966369372997
5899989417956578923571378315199921978695174998689868897586389979948879896898934889736923386517989785
9281676849959293979775182877897812493678799161757769999989969867439855125818129442971198699739557388
4475919879957889884939813999776999818798796521879871924749725987894786994958725987778611996824696996
8373791639774379711585898751151997858172797774919959798592979987999867752618819589785168999928696886
9977763998889359799421949996743699894919595899999767854599494798418928495698963462927981796996767593
7158988951987949566758968925188499741457373829952984195653893751921799866679969236327982299919497241
9345768513794668193984199998199919944392417719896282698389649867398962677886696961487194949688797479
9798378451999998499638318999771917477786999563599661159919563675619925415947999864782957569816689998
1587277984899982913961539966769739738598599994764297167417799429515482921298786889996573798136998119
6862877528497478579739956318945612999518811163785996796182641699862228949171568496389633894989134895
9957878484798399612898659161126465965219299893719988819827935779443847419355558585882799958995983898
4929763129667799959194379778917789115795769395671999264898987483889989999299568719389167893855936958
8995464987982983969387667531825997461987985777758646177899688897796796899589838794968888824776649779
8929996779279673991599994397759554491997154696789362571393813932788488169975655899459788181848485291
7396589792884275913849564139497387916794967629367698967893989845694998649396978919889877918997773988
9988814998686188997151816923596528719279865312987374949879598157976131559787915229226192788489999329
7688273881987982597998165459882889534983128846998773385896914973799981259813812977684993589999188891
9863799649697311898116929839876959427498924399396999721972869799563979891552689978998988976585177859
9799289996298785496798779827989419913999926987298641939996735451867517785516917267959949687159335994
2119972966591599875846979198128484976782939992378979999999991952798999819989777999489495973155789988
5594959849679229976592899699982974976329211757419911599863898984795598389963992376969584599961994799
9499915839187619969189833964989988773419999499845897923955958762389687319218355959753893618479513474
9129892175976515849924478398144924927778977956489979498895991666374898686273755959556758677666987856
3798839151427839992617983217951447499399989629999929199899777335443677372798179699999572779989927584
9989369421519694978991559748449571799694789957167495979999319838284795345682191854697182819189591892`;

var fixInput = (input) => {
  var parsed = input.split(`\n`);
  var cave = [];
  for (var i = 0; i < parsed.length; i++) {
    cave.push([]);
    for (var j = 0; j < parsed[i].length; j++) {
      cave[i][j] = parseInt(parsed[i][j]);
    }
  }
  return cave;
}

var exampleCave = fixInput(example);
var puzzleCave = fixInput(puzzle);

/*
var createGraph = (cave) => {
  var graph = new Graph();
  for (var i = 0; i < cave.length; i++) {
    for (var j = 0; j < cave[i].length; j++) {
      graph.addNode([i,j]);
      if (i !== 0) {
        graph.addDirectedEdge([i,j], [i-1,j], cave[i-1][j]);
      }
      if (i !== cave.length-1) {
        graph.addDirectedEdge([i,j], [i+1,j], cave[i+1][j]);
      }
      if (j !== 0) {
        graph.addDirectedEdge([i,j], [i,j-1], cave[i][j-1]);
      }
      if (j !== cave[i].length-1) {
        graph.addDirectedEdge([i,j], [i,j+1], cave[i][j+1]);
      }
    }
  }
  return graph;
}
*/

var createGraph = (cave) => {
  var graph = {};
  for (var i = 0; i < cave.length; i++) {
    for (var j = 0; j < cave[i].length; j++) {
      graph[[i, j]] = {};
      if (i !== 0) {
        graph[[i,j]][[i-1,j]] = cave[i-1][j];
      }
      if (i !== cave.length-1) {
        graph[[i,j]][[i+1,j]] = cave[i+1][j]
      }
      if (j !== 0) {
        graph[[i,j]][[i,j-1]] = cave[i][j-1];
      }
      if (j !== cave[i].length-1) {
        graph[[i,j]][[i,j+1]] = cave[i][j+1];
      }
    }
  }
  return graph;
}

var exampleGraph = createGraph(exampleCave);
var puzzleGraph = createGraph(puzzleCave);

var expandCave = (cave) => {
  var bigCave = [];
  var mult = cave.length;
  for (var i = 0; i < 5*cave.length; i++) {
    bigCave.push([]);
  }
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      for (var x = 0; x < cave.length; x++) {
        for (var y = 0; y < cave[i].length; y++) {
          var value = cave[x][y];
          var risk = ((value + i + j - 1) % 9 + 1);
          bigCave[i*cave.length+x].push(risk);
        }
      }
    }
  }
  return bigCave;
}

//console.log(puzzleGraph);
//console.log(findShortestPath(puzzleGraph, `0,0`, `99,99`));

var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};

var path = dijkstra.find_path(puzzleGraph, '0,0', '99,99');
var minDist = 0;
for (var i = 1; i < path.length; i++) {
  var coord = path[i].split(',');
  var x = coord[0];
  var y = coord[1];
  minDist += puzzleCave[x][y];
}
console.log(minDist);
var largeCave = expandCave(puzzleCave);
var largeGraph = createGraph(largeCave);
var bigPath = dijkstra.find_path(largeGraph, '0,0', '499,499');
var bigDist = 0;
for (var i = 1; i < bigPath.length; i++) {
  var coord = bigPath[i].split(',');
  var x = coord[0];
  var y = coord[1];
  bigDist += largeCave[x][y];
}
//console.log(bigPath);
console.log(bigDist);
