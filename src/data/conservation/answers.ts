type Question = {
  question: string;
  options: string[];
  answer: string;
};
export const questionsByWeek: { [week: string]: Question[] } = {
week1: [
  {
    question: "In the word root for conservation, 'con' stands for",
    options: ["together", "to keep", "manage", "house"],
    answer: "together",
  },
  {
    question: "\"The ability of a single economic actor (or small group of actors) to have a substantial influence on market prices\" is known as",
    options: ["price power", "market power", "externality", "economic power"],
    answer: "market power",
  },
  {
    question: "\"An economy that allocates resources through the decentralised decisions of many firms and households as they interact in markets for goods and services\" is a/an",
    options: ["urban economy", "mixed economy", "planned economy", "market economy"],
    answer: "market economy",
  },
  {
    question: "In the word root for conservation, 'servare' stands for",
    options: ["together", "to keep", "house", "manage"],
    answer: "to keep",
  },
  {
    question: "Which of these is true?",
    options: [
      "Wants are unlimited, resources are unlimited",
      "Wants are limited, resources are limited",
      "Wants are unlimited, resources are limited",
      "Wants are limited, resources are unlimited"
    ],
    answer: "Wants are unlimited, resources are limited",
  },
  {
    question: "\"An increase in the overall level of prices in the economy\" is",
    options: ["inflation", "deflation", "stagflation", "priceflation"],
    answer: "inflation",
  },
  {
    question: "Phillips curve shows the relation between",
    options: [
      "profit and loss",
      "marked price and selling price",
      "inflation rate and unemployment rate",
      "electricity consumption and heat output"
    ],
    answer: "inflation rate and unemployment rate",
  },
  {
    question: "In the word root for Economics, 'oikos' stands for",
    options: ["together", "to keep", "house", "manage"],
    answer: "house",
  },
  {
    question: "\"The cost of rational thinking occurs\"",
    options: ["before the margin", "at the margin", "after the margin", "none of these"],
    answer: "at the margin",
  },
  {
    question: "Input costs that do not require an outlay of money are",
    options: ["explicit costs", "implicit costs", "opportunity costs", "phantom costs"],
    answer: "implicit costs",
  },
],
week3: [
  {
    question: "_is used to identify which potential impacts are relevant to assess.",
    options: ["screening", "scoping", "reporting", "review"],
    answer: "scoping",
  },
  {
    question: "The potential or capacity of a material to have adverse effects on living organisms is",
    options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
    answer: "toxicity",
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled with soil and species of deciduous forest planted again. This is an example of",
    options: ["recovery", "restoration", "enhancement", "replacement"],
    answer: "restoration",
  },
  {
    question: "Hydrocarbons derived from incomplete burning of mineral oils are",
    options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
    answer: "pyrogenic hydrocarbons",
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a lake was created. It is now visited by several migratory birds. This is an example of",
    options: ["recovery", "restoration", "enhancement", "replacement"],
    answer: "replacement",
  },
  {
    question: "The relative effect of exposure is",
    options: ["vulnerability", "sensitivity", "sustainability", "resilience"],
    answer: "sensitivity",
  },
  {
    question: "_determines which projects or developments require a full or partial impact assessment study.",
    options: ["screening", "scoping", "reporting", "monitoring"],
    answer: "screening",
  },
  {
    question: "The extent to which a chemical is available for uptake into an organism is",
    options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
    answer: "bioavailability",
  },
  {
    question: "Hydrocarbons derived from biological processes acting on mineral oils are",
    options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
    answer: "biogenic hydrocarbons",
  },
  {
    question: "An adaptation that increases vulnerability rather than reducing it is",
    options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
    answer: "maladaptation",
  },
],
  week4: [
    {
      question: "Which of these is a deterministic factor?",
      options: ["environmental variation", "forest fire", "death rate", "diseases"],
      answer: "death rate",
    },
    {
      question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
      options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
      answer: "allelopathy",
    },
    {
      question: "The movement of lions across the Gir landscape is an example of",
      options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
      answer: "diffusion",
    },
    {
      question: "The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance",
      options: [
        "Liebig's law of the minimum", 
        "Liebig's law of the maximum", 
        "Shelford's law of tolerance", 
        "Shelford's law of intolerance"
      ],
      answer: "Shelford's law of tolerance",
    },
    {
      question: "The regular, seasonal movement of animals, often along fixed routes is called",
      options: ["translocation", "migration", "dispersal", "drifting"],
      answer: "migration",
    },
    {
      question: "Which of these is a stochastic factor?",
      options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
      answer: "environmental fluctuation",
    },
    {
      question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
      options: ["translocation", "migration", "dispersal", "drifting"],
      answer: "dispersal",
    },
    {
      question: "Scarcity of food is a",
      options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
      answer: "push factor",
    },
    {
      question: "Which of these correctly represents the process of habitat fragmentation and loss?",
      options: [
        "Original forest - Dissection - Perforation - Fragmentation - Attrition",
        "Original forest - Dissection - Attrition - Fragmentation - Perforation",
        "Original forest - Dissection - Perforation - Attrition - Fragmentation",
        "Original forest - Dissection - Fragmentation - Perforation - Attrition"
      ],
      answer: "Original forest - Dissection - Perforation - Fragmentation - Attrition",
    },
    {
      question: "A root zone treatment plant is an example of",
      options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
      answer: "phytoremediation",
    },
  ],
  week5: [
    {
      question: "'A measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants' is",
      options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
      answer: "elasticity",
    },
    {
      question: "The ability to produce a good using fewer inputs than another producer is",
      options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
      answer: "absolute advantage",
    },
    {
      question: "Common resource goods are",
      options: [
        "excludable, rival in consumption",
        "non-excludable, rival in consumption",
        "excludable, non-rival in consumption",
        "non-excludable, non-rival in consumption"
      ],
      answer: "non-excludable, rival in consumption",
    },
    {
      question: "If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own. This is a statement for",
      options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
      answer: "Coase theorem",
    },
    {
      question: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
      options: [
        "Good development", 
        "Sustainable development", 
        "Futuristic development", 
        "Gandhian development"
      ],
      answer: "Sustainable development",
    },
    {
      question: "Club goods are",
      options: [
        "excludable, rival in consumption", 
        "non-excludable, rival in consumption", 
        "excludable, non-rival in consumption", 
        "non-excludable, non-rival in consumption"
      ],
      answer: "excludable, non-rival in consumption",
    },
    {
      question: "Which of these is not a method of internalisation of externalities?",
      options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
      answer: "free market",
    },
    {
      question: "Private goods are",
      options: [
        "excludable, rival in consumption",
        "non-excludable, rival in consumption",
        "excludable, non-rival in consumption",
        "non-excludable, non-rival in consumption"
      ],
      answer: "excludable, rival in consumption",
    },
    {
      question: 'A simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions is the definition of a/an',
      options: ["equation", "model", "philosophy", "process dynamics"],
      answer: "model",
    },
    {
      question: '"The impact of one person\'s actions on the well-being of a bystander" is',
      options: ["actor-observer effect", "externality", "internality", "benefits principle"],
      answer: "externality",
    },
  ],
  week6: [
    {
      question: '"The claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises" is a statement of',
      options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
      answer: "law of demand",
    },
    {
      question: '"A legal maximum on the price at which a good can be sold" is',
      options: ["price ceiling", "price floor", "selling ceiling", "selling floor"],
      answer: "price ceiling",
    },
    {
      question: '"A good for which, other things being equal, an increase in income leads to a decrease in demand" is',
      options: ["normal good", "inferior good", "Giffen good", "common good"],
      answer: "inferior good",
    },
    {
      question: '"A table that shows the relationship between the price of a good and the quantity supplied" is',
      options: ["demand table", "demand schedule", "supply table", "supply schedule"],
      answer: "supply schedule",
    },
    {
      question: '"A graph of the relationship between the price of a good and the quantity demanded" is',
      options: ["demand curve", "supply curve", "Laffer\'s curve", "Phillips curve"],
      answer: "demand curve",
    },
    {
      question: '"A table that shows the relationship between the price of a good and the quantity demanded" is',
      options: ["demand table", "demand schedule", "supply table", "supply schedule"],
      answer: "demand schedule",
    },
    {
      question: '"A measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good" is',
      options: [
        "price elasticity of demand",
        "income elasticity of demand",
        "cross-price elasticity of demand",
        "price elasticity of supply"
      ],
      answer: "cross-price elasticity of demand",
    },
    {
      question: "Rice and wheat are",
      options: ["substitutes", "complements", "club goods", "public goods"],
      answer: "substitutes",
    },
    {
      question: '"A good for which, other things being equal, an increase in income leads to an increase in demand" is',
      options: ["normal good", "inferior good", "Giffen good", "common good"],
      answer: "normal good",
    },
    {
      question: '"A measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price" is',
      options: [
        "price elasticity of demand",
        "income elasticity of demand",
        "cross-price elasticity of demand",
        "price elasticity of supply"
      ],
      answer: "price elasticity of demand",
    },
  ],

  week7: [
    {
      question: '"The price of a good that prevails in the world market for that good" is the definition of',
      options: ["export price", "import price", "world price", "domestic price"],
      answer: "world price",
    },
    {
      question: "The area between the demand curve and the price is an indicator of",
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "consumer surplus",
    },
    {
      question: '"The amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it" is',
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "consumer surplus",
    },
    {
      question: '"The amount a seller is paid for a good minus the seller\'s cost of providing it" is',
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "producer surplus",
    },
    {
      question: "Value to buyers - Cost to sellers is",
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "total surplus",
    },
    {
      question: "The fall in total surplus that results from a market distortion, such as a tax is",
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "deadweight loss",
    },
    {
      question: "Laffer's curve is the relationship between",
      options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
      answer: "tax size and tax revenue",
    },
    {
      question: "Imposition of tariff",
      options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
      answer: "increases producer surplus and government revenue",
    },
    {
      question: '"The maximum amount that a buyer will pay for a good" is',
      options: ["willingness to pay", "market demand", "demand curve", "buyer's surplus"],
      answer: "willingness to pay",
    },
    {
      question: "The area between the supply curve and the price is an indicator of",
      options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
      answer: "producer surplus",
    },
  ],
week8: [
  {
    question: "For a positive consumption externality,",
    options: ["SMB = PMB", "SMB = PMB - MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    answer: "SMB = PMB + MB",
  },
  {
    question: "For a positive production externality,",
    options: ["SMB = PMB", "SMB = PMB - MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    answer: "SMB = PMB",
  },
  {
    question: "The direct cost to producers of producing an additional unit of a good is",
    options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
    answer: "private marginal cost (PMC)",
  },
  {
    question: "For a negative production externality,",
    options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
    answer: "SMC = PMC + MD",
  },
  {
    question: "The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others is",
    options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
    answer: "social marginal cost (SMC)",
  },
  {
    question: "Partying with loud noise is an example of",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    answer: "negative consumption externality",
  },
  {
    question: "When an individual's consumption increases the well-being of others, but the individual is not compensated by those others, we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    answer: "positive consumption externality",
  },
  {
    question: "When a firm's production increases the well-being of others but the firm is not compensated by those others, we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    answer: "positive production externality",
  },
  {
    question: "When an individual's consumption reduces the well-being of others who are not compensated by the individual, we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    answer: "negative consumption externality",
  },
  {
    question: "For a negative consumption externality,",
    options: ["SMB = PMB", "SMB = PMB - MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    answer: "SMB = PMB - MD",
  },
],
week9: [
  {
    question: "\"Costs that have already been committed and cannot be recovered\" are",
    options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
    answer: "sunk costs",
  },
  {
    question: "\"Total revenue minus total cost, including both explicit and implicit costs\" is a definition of",
    options: ["economic profit", "accounting profit", "profit", "loss"],
    answer: "economic profit",
  },
  {
    question: "\"The increase in total cost that arises from an extra unit of production\" are",
    options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
    answer: "marginal costs",
  },
  {
    question: "A monopolist firm's profit is given by",
    options: ["(Price - ATC) x Q", "(Price - Q) * ATC", "(ATC - Q) × Price", "Price x Q - ATC"],
    answer: "(Price - ATC) x Q",
  },
  {
    question: "Which of the following is true for a competitive firm?",
    options: ["P > MR", "P > MC", "MR > MC", "MR = MC"],
    answer: "MR = MC",
  },
  {
    question: "\"The amount a firm receives for the sale of its output\" is a definition of",
    options: ["total revenue", "total cost", "profit", "loss"],
    answer: "total revenue",
  },
  {
    question: "When the cost of production for a single firm is much lesser than the cost of production for competitive firms, we have a/an",
    options: ["natural monopoly", "artificial monopoly", "oligopoly", "duopoly"],
    answer: "natural monopoly",
  },
  {
    question: "\"Costs that do not vary with the quantity of output produced\" are",
    options: ["fixed costs", "variable costs", "marginal cost", "sunk cost"],
    answer: "fixed costs",
  },
  {
    question: "\"Costs that vary with the quantity of output produced\" are",
    options: ["fixed costs", "variable costs", "marginal costs", "sunk costs"],
    answer: "variable costs",
  },
  {
    question: "\"The increase in output that arises from an additional unit of input\" is",
    options: ["marginal product", "marginal profit", "marginal loss"],
    answer: "marginal product",
  },
],
week10: [
  {
    question: "\"An absolute level of income set by the government for each family size below which a family is deemed to be in poverty\" is known as",
    options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
    answer: "poverty line",
  },
  {
    question: "Absolute poverty depends",
    options: ["on income but not on access to social services", "not on income but on access to social services", "on income and on access to social services", "neither on income nor on access to social services"],
    answer: "on income and on access to social services",
  },
  {
    question: "\"The equipment and structures used to produce goods and services\" is the definition of",
    options: ["tools", "machinery", "capital", "factors of production"],
    answer: "capital",
  },
  {
    question: "\"Above-equilibrium wages paid by firms to increase worker productivity\" are known as",
    options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
    answer: "efficiency wage",
  },
  {
    question: "\"Government policy aimed at protecting people against the risk of adverse events\" is",
    options: ["Social protection", "Social insurance", "Social security", "Socialism"],
    answer: "Social insurance",
  },
  {
    question: "\"A difference in wages that arises to offset the non-monetary characteristics of different jobs\" is known as",
    options: ["differentiating differential", "compensating differential", "differentiating integral", "compensating integral"],
    answer: "compensating differential",
  },
  {
    question: "For a competitive and profit-maximising firm,",
    options: [
      "each factor's earnings = value of the marginal product for that factor",
      "each factor's rental price > the value of the marginal product for that factor",
      "each factor's rental price = the value of the average product for that factor"
    ],
    answer: "each factor's earnings = value of the marginal product for that factor",
  },
  {
    question: "\"A condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information\" is known as",
    options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
    answer: "absolute poverty",
  },
  {
    question: "\"A condition where a household's income is lower than the median income in the particular country\" is known as",
    options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
    answer: "relative poverty",
  },
  {
    question: "\"The increase in the amount of output from an additional unit of labor\" is",
    options: ["marginal product of labour", "marginal product of input", "average product of labour", "average product of input"],
    answer: "marginal product of labour",
  },
],
week11: [
  {
    question: "\"An action taken by an uninformed party to induce an informed party to reveal information\" is known as",
    options: ["signalling", "screening", "informing", "heuristics"],
    answer: "screening",
  },
  {
    question: "\"The part of actual resources that can be developed profitably in the future\" are",
    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
    answer: "reserve resources",
  },
  {
    question: "\"The limit on the consumption bundles that a consumer can afford\" is known as",
    options: ["consumption constraint", "budget constraint", "bundle constraint", "affordability constraint"],
    answer: "budget constraint",
  },
  {
    question: "\"Mental shortcut using emotion (gut feeling) to influence the decision\" is",
    options: ["affect heuristic", "availability heuristic", "effort heuristic", "familiarity heuristic"],
    answer: "affect heuristic",
  },
  {
    question: "\"Those resources that are currently being used after surveying, quantification and qualification\" are",
    options: ["potential resources", "actual resources", "reserve resources", "stock resources"],
    answer: "actual resources",
  },
  {
    question: "\"The change in consumption that results when a price change moves the consumer along a given indifference curve to a point with a new marginal rate of substitution\" is known as",
    options: ["income effect", "substitution effect", "indifference effect", "budget effect"],
    answer: "substitution effect",
  },
  {
    question: "An inferior good whose demand increases with price is called as",
    options: ["Normal good", "Veblen good", "Giffen good", "Demand good"],
    answer: "Giffen good",
  },
  {
    question: "Which of these is not a property of indifference curves?",
    options: [
      "Higher indifference curves are preferred to lower ones",
      "Indifference curves are downward-sloping",
      "Indifference curves cross at right angles",
      "Indifference curves are bowed inwards"
    ],
    answer: "Indifference curves cross at right angles",
  },
  {
    question: "\"An action taken by an informed party to reveal private information to an uninformed party\" is known as",
    options: ["signalling", "screening", "informing", "heuristics"],
    answer: "signalling",
  },
  {
    question: "\"Simple strategies or mental processes used to quickly form judgments, make decisions, and find solutions to complex problems\" is known as",
    options: ["signalling", "screening", "informing", "heuristics"],
    answer: "heuristics",
  },
],
};
