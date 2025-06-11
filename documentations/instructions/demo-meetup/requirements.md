# User Stories pour le Filtrage de Produits

## Chargement Initial

### La liste des produits est chargée (System)
- **Trigger**: À l'ouverture de la page produit
- **Input**: Aucun (chargement par défaut)
- **Output**: `[ { id, name, image, category, price, description } ]`

### Les catégories disponibles sont chargées (System)
- **Trigger**: À l'ouverture de la page produit
- **Input**: Aucun
- **Output**: `[ "Maison", "Électronique", "Sport", "Jardin", ... ]`

---

## Interaction avec les Filtres

### L'utilisateur sélectionne une ou plusieurs catégories (User)
- **Trigger**: À chaque clic sur une catégorie
- **Input**: `selectedCategories: string[]`
- **Output**: Mise à jour de l'état local du filtre

### Le système filtre les produits par catégories sélectionnées (System)
- **Trigger**: À chaque changement de `selectedCategories`
- **Input**: `selectedCategories: string[]`
- **Output**: `[produits filtrés]` selon logique **OU**

---

## Résultats Affichés

### La liste des produits correspondants s'affiche dynamiquement (System)
- **Trigger**: Lorsqu'un filtrage est appliqué
- **Input**: `produits filtrés`
- **Output**: UI liste mise à jour

### Un message s'affiche si aucun produit ne correspond (System)
- **Trigger**: Si la liste filtrée est vide
- **Input**: `selectedCategories: string[]`
- **Output**: `Message "Aucun produit ne correspond à votre recherche"`

---

## Réinitialisation

### L'utilisateur réinitialise les filtres (User)
- **Trigger**: Clic sur le bouton "Réinitialiser"
- **Input**: Aucun
- **Output**: `selectedCategories = []`, réaffichage de tous les produits

