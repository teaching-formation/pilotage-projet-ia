/* =========================================================
   Quiz Data — Pilotage IA & Big Data (ANSUT) v3
   20 questions : 3Q × 5 chapitres + 5Q synthèse finale
   ========================================================= */

const quizzes = {

  /* ── Chapitre 1 : Big Data, ML, IA & Data Science ── */
  chapitre1: [
    {
      id: "c1q1",
      question: "Parmi les 5V du Big Data, lequel mesure la fiabilité et la qualité des données ?",
      options: ["Volume", "Vélocité", "Véracité", "Valeur"],
      correct: 2,
      explanation: "La Véracité (Veracity) désigne le degré de confiance accordé aux données : exactitude, cohérence, fiabilité. C'est souvent le V le plus sous-estimé, surtout dans les pays où la collecte de données est fragmentée."
    },
    {
      id: "c1q2",
      question: "Quelle relation décrit le mieux IA, Machine Learning et Data Science ?",
      options: [
        "Ce sont trois synonymes du même domaine",
        "Le ML est un sous-domaine de l'IA ; la Data Science est une discipline transversale qui utilise les deux",
        "La Data Science contient l'IA, qui contient le ML",
        "Le ML et l'IA sont indépendants ; la Data Science les relie"
      ],
      correct: 1,
      explanation: "IA ⊃ ML ⊃ Deep Learning. La Data Science est une discipline à part, transversale (stats + informatique + métier), qui utilise le ML et l'IA comme outils parmi d'autres (visualisation, storytelling, analyse exploratoire)."
    },
    {
      id: "c1q3",
      question: "Dans un projet de détection de fraude Simbox (routage illicite d'appels internationaux), quel type d'apprentissage ML est utilisé pour apprendre à partir de CDR étiquetés 'fraude' / 'légitime' ?",
      options: [
        "Apprentissage par renforcement",
        "Apprentissage non supervisé",
        "Apprentissage supervisé",
        "Apprentissage semi-supervisé"
      ],
      correct: 2,
      explanation: "L'apprentissage supervisé utilise des données étiquetées (CDR historiques avec leur statut connu) pour entraîner un modèle à détecter une ligne Simbox en temps réel. C'est le type le plus courant en entreprise (80 % des cas)."
    }
  ],

  /* ── Chapitre 2 : Cadrage & Gouvernance ── */
  chapitre2: [
    {
      id: "c2q1",
      question: "Pourquoi la méthode prédictive (cycle en V) est-elle rarement adaptée seule aux projets IA ?",
      options: [
        "Elle est trop récente et peu connue des équipes",
        "Elle nécessite des outils cloud que l'IA n'utilise pas",
        "Impossible de figer un cahier des charges précis sur un modèle ML : les résultats dépendent des données découvertes en chemin",
        "Elle interdit le recours à des prestataires externes"
      ],
      correct: 2,
      explanation: "En IA, on ne sait pas à l'avance si le modèle atteindra la performance attendue. La qualité des données se découvre en chemin, et les besoins évoluent dès les premiers résultats. Le prédictif pur crée un risque de livraison d'un modèle conforme au cahier des charges mais inutile métier."
    },
    {
      id: "c2q2",
      question: "Parmi les typologies de projets IA, lesquels ont généralement les cycles les plus longs et exigent le plus de données non structurées ?",
      options: [
        "Projets de prédiction (scoring client, churn)",
        "Projets d'analytics / BI augmentée",
        "Projets Vision / NLP / IA générative",
        "Projets de recommandation de contenu"
      ],
      correct: 2,
      explanation: "Les projets Vision (images), NLP (langues) et IA générative nécessitent de gros volumes de données non structurées (images, textes, audio), des GPU coûteux et des cycles d'itération longs. L'approche hybride est recommandée pour ces projets."
    },
    {
      id: "c2q3",
      question: "Parmi les 4 étapes du cadrage IA, laquelle est le plus souvent sous-estimée et bloque les projets en cours de route ?",
      options: [
        "La définition du besoin métier",
        "L'évaluation de la disponibilité et de la qualité des données",
        "L'estimation du ROI et le go/no-go",
        "L'organisation du kick-off et la constitution de l'équipe"
      ],
      correct: 1,
      explanation: "L'étape 'données' est la plus sous-estimée : 40 % des projets IA s'arrêtent faute de données exploitables, mal organisées ou inaccessibles. 'Avoir des données' et 'avoir de bonnes données accessibles' sont deux choses très différentes."
    }
  ],

  /* ── Chapitre 3 : Données & Infrastructures ── */
  chapitre3: [
    {
      id: "c3q1",
      question: "Un directeur marketing veut accéder rapidement à des données structurées sur les performances de ses campagnes. Quel système est le plus adapté ?",
      options: [
        "Data Lake — pour la flexibilité et les formats variés",
        "Data Warehouse — pour les requêtes SQL rapides sur données structurées",
        "Data Mart marketing — sous-ensemble optimisé pour son usage précis",
        "Système OLTP — base de données opérationnelle en temps réel"
      ],
      correct: 2,
      explanation: "Le Data Mart est un sous-ensemble du Warehouse spécialisé pour un département métier (ici, marketing). Il offre un accès rapide aux données structurées pertinentes sans exposer l'ensemble du Warehouse, avec des performances optimisées pour les besoins de l'équipe."
    },
    {
      id: "c3q2",
      question: "Une application de détection de fraude Mobile Money doit bloquer une transaction frauduleuse en moins d'une seconde. Quelle approche de traitement s'impose ?",
      options: [
        "Traitement batch quotidien (consolidation de fin de journée)",
        "Traitement batch horaire (toutes les heures)",
        "Traitement streaming (flux continu, latence en millisecondes)",
        "Traitement par lots nocturnes (batch nightly)"
      ],
      correct: 2,
      explanation: "Le streaming traite chaque événement au fil de l'eau avec une latence de l'ordre de la milliseconde à la seconde. C'est la seule approche possible pour bloquer une transaction frauduleuse en temps réel. Le batch, même horaire, est trop lent pour ce cas d'usage."
    },
    {
      id: "c3q3",
      question: "Un Data Lake mal gouverné peut devenir inutilisable. Comment appelle-t-on ce phénomène ?",
      options: [
        "Data Overflow (débordement de données)",
        "Data Swamp (marécage de données)",
        "Data Pollution (pollution de données)",
        "Data Entropy (entropie de données)"
      ],
      correct: 1,
      explanation: "Sans catalogue, sans qualité, sans gouvernance, le Data Lake devient un 'data swamp' : des données brutes sans contexte, sans owner, sans documentation. Personne ne sait ce qui s'y trouve ni comment l'utiliser. C'est le risque n°1 du Data Lake."
    }
  ],

  /* ── Chapitre 4 : Développement & MLOps ── */
  chapitre4: [
    {
      id: "c4q1",
      question: "Quelle est la principale différence entre DevOps et MLOps ?",
      options: [
        "DevOps concerne uniquement les développeurs ; MLOps concerne uniquement les data scientists",
        "DevOps et MLOps sont identiques, MLOps est juste un nouveau nom marketing",
        "MLOps ajoute à DevOps la gestion des données et la surveillance de la dérive des modèles en production",
        "DevOps utilise Docker ; MLOps utilise uniquement Python"
      ],
      correct: 2,
      explanation: "DevOps automatise le cycle du logiciel (code → test → déploiement). MLOps y ajoute deux dimensions spécifiques au ML : (1) la gestion des données (versioning, qualité) et (2) la surveillance des modèles qui 'dérivent' quand le monde réel évolue — ce qu'un logiciel classique ne fait jamais."
    },
    {
      id: "c4q2",
      question: "Parmi les 7 composantes MLOps, laquelle garantit la traçabilité et la reproductibilité des expériences ML (code, données, modèles) ?",
      options: [
        "Monitoring (surveillance de la dérive)",
        "Scalabilité (infrastructure élastique)",
        "Versioning (MLflow, DVC, Git)",
        "Réentraînement automatique"
      ],
      correct: 2,
      explanation: "Le versioning (Git pour le code, DVC pour les données, MLflow pour les modèles et métriques) est la fondation de MLOps. Sans traçabilité, impossible de reproduire une expérience passée, d'auditer une décision IA ou de revenir à une version stable si un modèle dégrade en production."
    },
    {
      id: "c4q3",
      question: "Dans un pipeline CI/CD ML, que valide spécifiquement l'Intégration Continue (CI) avant tout déploiement ?",
      options: [
        "Le déploiement du modèle sur l'environnement de production",
        "La qualité du code (SonarQube) et les métriques du modèle sur données de validation",
        "Le scan de sécurité des images Docker (Trivy)",
        "Le rollback vers la version précédente du modèle"
      ],
      correct: 1,
      explanation: "La CI valide automatiquement à chaque commit : qualité du code (linting, SonarQube), tests unitaires, entraînement sur données de validation et vérification que les métriques (F1, AUC…) dépassent les seuils définis. Si un test échoue, le déploiement est bloqué."
    }
  ],

  /* ── Chapitre 5 : Pilotage & Changement ── */
  chapitre5: [
    {
      id: "c5q1",
      question: "Qu'est-ce qu'un jalon (milestone) dans un projet ?",
      options: [
        "Une tâche longue et complexe avec une durée définie",
        "Un événement daté sans durée marquant l'achèvement d'une phase clé",
        "Un indicateur de performance (KPI) mesuré en continu",
        "Une réunion hebdomadaire de suivi avec le sponsor"
      ],
      correct: 1,
      explanation: "Un jalon est un événement ponctuel (durée = 0) qui marque une étape clé : kick-off, validation des données, POC accepté, go-live… Un jalon non atteint n'est pas un échec — c'est un signal qui déclenche un arbitrage avec le sponsor."
    },
    {
      id: "c5q2",
      question: "Selon McKinsey, quelle est la principale cause d'échec des projets de transformation digitale (70 % des cas) ?",
      options: [
        "Les problèmes techniques (bugs, pannes d'infrastructure)",
        "Le manque de budget ou les dépassements de coûts",
        "Les raisons humaines : résistance au changement et manque d'adoption",
        "Les retards de livraison dus à une mauvaise planification"
      ],
      correct: 2,
      explanation: "McKinsey indique que 70 % des échecs de transformation digitale ont une cause humaine, pas technique. Les utilisateurs qui contournent l'outil, l'adoption de façade, la peur du remplacement — voilà les vrais ennemis. D'où l'importance de prévoir 10 à 20 % du budget pour la conduite du changement."
    },
    {
      id: "c5q3",
      question: "Parmi les 5 types de coûts d'un projet, lequel est constitué intentionnellement pour couvrir les imprévus et aléas ?",
      options: [
        "Coûts directs (salaires, licences, cloud)",
        "Coûts irrécupérables (dépenses déjà engagées non remboursables)",
        "Coûts variables (liés à l'usage réel)",
        "Réserve de contingence (provision pour risques identifiés)"
      ],
      correct: 3,
      explanation: "La réserve de contingence (10-15 % du budget) est provisionnée intentionnellement pour les risques identifiés mais incertains : dépassement de scope, rotation d'équipe, données de moindre qualité qu'attendu. Les coûts irrécupérables sont des dépenses passées qu'on ne peut pas récupérer."
    }
  ],

  /* ── QCM Final — Synthèse transversale ── */
  final: [
    {
      id: "fq1",
      question: "Parmi les 5V du Big Data, lequel représente l'avantage stratégique que les données peuvent générer pour une organisation ?",
      options: ["Vélocité", "Variété", "Valeur", "Véracité"],
      correct: 2,
      explanation: "La Valeur est le V qui justifie l'investissement Big Data : la capacité à extraire des insights actionnables, à prendre de meilleures décisions et à créer un avantage concurrentiel. Sans valeur, les 4 autres V ne servent à rien."
    },
    {
      id: "fq2",
      question: "Pour piloter un programme de transformation IA dans un contexte institutionnel avec budget fixé par l'État mais modélisation ML incertaine, quelle approche est optimale ?",
      options: [
        "Prédictive pure : tout figer en amont pour respecter le budget public",
        "Agile pure : pas de planning long terme, sprint hebdomadaires seulement",
        "Hybride : macro prédictif pour le cadre institutionnel + micro agile pour les sprints de data science",
        "Aucune méthode formelle : les projets IA ne peuvent pas être planifiés"
      ],
      correct: 2,
      explanation: "L'hybride est la bonne réponse dans un contexte public : le cadre institutionnel (budget, jalons contractuels, gouvernance) est géré en prédictif, tandis que l'exécution des lots de data science (incertitude sur les modèles) se fait en sprints agiles. C'est le modèle de l'ANSUT."
    },
    {
      id: "fq3",
      question: "Un Data Lake mal gouverné devient inutilisable. Quel risque cela illustre-t-il dans la gestion des infrastructures Big Data ?",
      options: [
        "Le risque de sur-ingestion (trop de données stockées)",
        "Le risque de data swamp : données sans contexte, sans owner, sans documentation",
        "Le risque de latence élevée dans les requêtes batch",
        "Le risque de non-conformité RGPD sur les données structurées"
      ],
      correct: 1,
      explanation: "Un Data Lake sans gouvernance (catalogue, qualité, propriétaires des données) devient un 'data swamp' : des données brutes qu'on ne peut plus utiliser car personne ne sait ce qu'elles contiennent ni comment elles ont été produites. La gouvernance est la condition de survie du Data Lake."
    },
    {
      id: "fq4",
      question: "MLOps = DevOps + ______. Que faut-il ajouter à DevOps pour obtenir MLOps ?",
      options: [
        "Docker + Kubernetes (orchestration de conteneurs)",
        "Gestion des données + surveillance de la dérive des modèles en production",
        "Python + Scikit-learn (langages et frameworks ML)",
        "Azure DevOps + Jira (outils de gestion de projet)"
      ],
      correct: 1,
      explanation: "MLOps = DevOps + (1) gestion des données (versioning, qualité, lineage) + (2) surveillance des modèles en production (drift detection, réentraînement). Ces deux dimensions n'existent pas dans un pipeline logiciel classique car le code, contrairement à un modèle ML, ne se 'dégrade' pas avec le temps."
    },
    {
      id: "fq5",
      question: "La résistance au changement est la cause n°1 d'échec post-déploiement IA. Quelle pratique, dès la phase de conception, réduit le plus efficacement ce risque ?",
      options: [
        "Déployer l'outil sans communiquer pour éviter les anticipations négatives",
        "Former intensivement les utilisateurs uniquement à la fin du projet (juste avant le go-live)",
        "Impliquer les métiers dès la conception : co-construction, ambassadeurs, tests pilotes",
        "Confier entièrement la conduite du changement à l'équipe IT"
      ],
      correct: 2,
      explanation: "La co-conception est le levier le plus puissant : les utilisateurs résistent moins à un outil qu'ils ont contribué à façonner. Ambassadeurs identifiés au kick-off, ateliers métiers réguliers, tests pilotes avant le déploiement général — voilà la recette d'une adoption réelle."
    }
  ]
};

/* ── Helpers ── */
function getQuestion(id) {
  for (const chapter of Object.values(quizzes)) {
    const q = chapter.find(q => q.id === id);
    if (q) return q;
  }
  return null;
}

function getChapterKey(questionId) {
  for (const [key, questions] of Object.entries(quizzes)) {
    if (questions.find(q => q.id === questionId)) return key;
  }
  return null;
}
