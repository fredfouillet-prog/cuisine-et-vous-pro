-- =============================================================================
-- Seed — Formations CUI1, CUI2, CUI3
-- =============================================================================

insert into public.formations
  (code, titre, accroche, objectif_general, public_concerne, duree, modalites, programme, competences, finançable, actif, ordre)
values

-- ---------------------------------------------------------------------------
-- CUI1 — Hygiène alimentaire et HACCP
-- ---------------------------------------------------------------------------
(
  'CUI1',
  'Hygiène alimentaire et HACCP',
  'Maîtrisez les règles d''hygiène alimentaire et mettez en place votre plan HACCP — une obligation légale, une garantie de sécurité.',
  'Former les professionnels de la restauration aux bonnes pratiques d''hygiène et à la méthode HACCP pour garantir la sécurité des consommateurs et la conformité réglementaire (arrêté du 5 octobre 2011).',
  'Gestionnaires, cuisiniers et responsables de restauration commerciale ou collective. Formation obligatoire pour au moins un encadrant par établissement servant des denrées animales ou d''origine animale.',
  '2 jours — 14 heures',
  'Présentiel en groupe (8 à 14 participants). Session intra-entreprise ou inter-entreprises. Alternance d''apports théoriques, d''études de cas réels et de mises en situation pratiques. Évaluation par QCM en fin de formation. Attestation de formation délivrée.',
  $programme$[
    {
      "module": "1",
      "titre": "Réglementation et microbiologie",
      "contenu": [
        "Règlement CE 852/2004 et Paquet Hygiène",
        "Obligations légales du responsable d''établissement",
        "Microbiologie alimentaire : bactéries, virus, toxines",
        "Toxi-infections alimentaires collectives (TIAC) : causes et conséquences"
      ]
    },
    {
      "module": "2",
      "titre": "Bonnes Pratiques d''Hygiène (BPH)",
      "contenu": [
        "Hygiène du personnel : tenue, lavage des mains, état de santé",
        "Gestion des températures : chaîne du froid et chaîne du chaud",
        "Réception, stockage et DLC / DLUO",
        "Plan de nettoyage et désinfection — produits et protocoles"
      ]
    },
    {
      "module": "3",
      "titre": "La méthode HACCP — 7 principes",
      "contenu": [
        "Analyse des dangers et points critiques (CCP)",
        "Définir les limites critiques et mesures de surveillance",
        "Actions correctives et vérification",
        "Traçabilité et enregistrements obligatoires"
      ]
    },
    {
      "module": "4",
      "titre": "Mise en application et évaluation",
      "contenu": [
        "Exercice de rédaction d''un plan HACCP simplifié sur un cas concret",
        "Audit flash d''une fiche de production",
        "QCM de validation des acquis (20 questions)",
        "Remise du livret stagiaire et des ressources réglementaires"
      ]
    }
  ]$programme$::jsonb,
  $competences$[
    "Identifier et hiérarchiser les risques sanitaires liés aux aliments",
    "Appliquer les Bonnes Pratiques d''Hygiène au quotidien",
    "Élaborer et maintenir un plan HACCP opérationnel",
    "Assurer la traçabilité et gérer les enregistrements obligatoires",
    "Réagir efficacement face à une alerte sanitaire"
  ]$competences$::jsonb,
  true,
  true,
  1
),

-- ---------------------------------------------------------------------------
-- CUI2 — Management d'équipe en cuisine
-- ---------------------------------------------------------------------------
(
  'CUI2',
  'Management d''équipe en cuisine',
  'Développez votre posture de chef-leader pour fédérer, motiver et faire grandir votre brigade dans un secteur sous pression.',
  'Permettre aux chefs de cuisine et responsables de restauration d''acquérir des outils managériaux concrets pour améliorer la cohésion de leur équipe, prévenir les conflits et optimiser la performance collective.',
  'Chefs de cuisine, seconds de cuisine, responsables de restauration collective et managers en hôtellerie-restauration ayant au moins 2 ans d''expérience en encadrement d''équipe.',
  '3 jours — 21 heures',
  'Présentiel en groupe restreint (6 à 10 participants). Intra-entreprise possible. Forte dimension expérientielle : profil DISC, jeux de rôle filmés, coachings croisés et feedbacks collectifs. Suivi post-formation à J+30 inclus.',
  $programme$[
    {
      "module": "1",
      "titre": "Se connaître pour mieux manager",
      "contenu": [
        "Profil DISC : identifier son style de leadership naturel",
        "Forces et axes de développement du manager-cuisinier",
        "Communication assertive et écoute active en contexte de rush",
        "Gérer son stress pour rester lucide sous pression"
      ]
    },
    {
      "module": "2",
      "titre": "Animer et motiver la brigade",
      "contenu": [
        "Fixer des objectifs clairs et mobilisateurs (méthode SMART)",
        "Déléguer avec efficacité sans perdre en qualité",
        "Briefing de service et débriefing post-service : rituels qui soudent",
        "Reconnaître et valoriser les contributions individuelles et collectives"
      ]
    },
    {
      "module": "3",
      "titre": "Gérer les situations difficiles",
      "contenu": [
        "Identifier les sources de conflit propres à la cuisine",
        "Conduire un entretien de recadrage bienveillant et ferme",
        "Gérer les personnalités difficiles sans déstabiliser le groupe",
        "Prévenir l''absentéisme et le turn-over : leviers concrets"
      ]
    },
    {
      "module": "4",
      "titre": "Plan d''action et engagement",
      "contenu": [
        "Co-construction du plan de développement managérial individuel",
        "Engagement sur 3 actions prioritaires à mettre en œuvre dès la semaine suivante",
        "Évaluation à chaud : satisfaction et acquis",
        "Point individuel à J+30 (30 min visio) pour mesurer les progrès"
      ]
    }
  ]$programme$::jsonb,
  $competences$[
    "Adopter une posture de leader adaptée à chaque situation et profil de collaborateur",
    "Animer un briefing de service et un débriefing efficaces en moins de 10 minutes",
    "Conduire un entretien de recadrage ou de félicitation en respectant les étapes clés",
    "Déléguer une tâche en s''assurant de sa bonne exécution",
    "Construire et suivre un plan de développement managérial personnel"
  ]$competences$::jsonb,
  true,
  true,
  2
),

-- ---------------------------------------------------------------------------
-- CUI3 — Cuisine végétale et tendances alimentaires
-- ---------------------------------------------------------------------------
(
  'CUI3',
  'Cuisine végétale et tendances alimentaires',
  'Intégrez la cuisine végétale et les nouvelles attentes des convives dans votre carte — sans sacrifier le plaisir ni la rentabilité.',
  'Permettre aux professionnels de la cuisine de maîtriser les techniques et les équilibres de la cuisine végétale, et d''intégrer les grandes tendances alimentaires (flexitarisme, sans allergènes majeurs, circuits courts) dans une offre cohérente et attractive.',
  'Cuisiniers, chefs de partie, responsables de restauration collective et traiteurs souhaitant développer ou renouveler leur offre végétale face à l''évolution des attentes des convives.',
  '2 jours — 14 heures',
  'Présentiel en cuisine pédagogique équipée (4 à 10 participants). 60 % du temps en ateliers pratiques : réalisation de 8 recettes végétales en groupe. Remise d''un livret de recettes et d''une fiche synthèse allergènes. Dégustation commentée en fin de chaque journée.',
  $programme$[
    {
      "module": "1",
      "titre": "Comprendre les nouvelles attentes",
      "contenu": [
        "Panorama des tendances : végétarisme, véganisme, flexitarisme, sans gluten",
        "Réglementation allergènes : les 14 allergènes majeurs et affichage obligatoire",
        "Valorisation des circuits courts, des labels et des produits de saison",
        "Opportunités économiques : marges et fidélisation d''une clientèle exigeante"
      ]
    },
    {
      "module": "2",
      "titre": "Bases nutritionnelles de la cuisine végétale",
      "contenu": [
        "Protéines végétales complètes : légumineuses, céréales, graines et associations",
        "Équilibrer un menu végétalien : apports en fer, B12, oméga-3, calcium",
        "Substituts aux produits animaux : laits végétaux, aquafaba, alternatives au beurre et aux œufs",
        "Aliments fermentés : kombucha, kéfir, kimchi, tempeh — bienfaits et intégration en carte"
      ]
    },
    {
      "module": "3",
      "titre": "Techniques culinaires végétales",
      "contenu": [
        "Cuissons des légumineuses et des céréales anciennes (épeautre, sorgho, teff)",
        "Techniques de texturation pour des préparations sans viande avec du caractère",
        "Développer l''umami végétal : miso, champignons, algues, levure nutritionnelle",
        "Pâtisserie végétale : gels, émulsions et liants sans œuf ni beurre"
      ]
    },
    {
      "module": "4",
      "titre": "Ateliers pratiques et mise en carte",
      "contenu": [
        "Réalisation en brigade de 8 recettes végétales (entrée, plat, dessert)",
        "Analyse coût-matière et calcul du prix de vente d''un plat végétal",
        "Construction d''une offre végétale équilibrée et rentable pour sa structure",
        "Dégustation collective et retours croisés — conseils de dressage et mise en valeur"
      ]
    }
  ]$programme$::jsonb,
  $competences$[
    "Concevoir des menus végétaux équilibrés, attractifs et conformes à la réglementation allergènes",
    "Maîtriser les techniques culinaires spécifiques à la cuisine végétale",
    "Calculer et optimiser le coût-matière d''un plat végétal",
    "Intégrer les produits locaux et de saison dans une offre cohérente et rentable",
    "Adapter son offre aux différents profils alimentaires des convives"
  ]$competences$::jsonb,
  true,
  true,
  3
);
