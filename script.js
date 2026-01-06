/**
 * WardrobeJamia E-Commerce - JavaScript
 * Complete product data and functionality
 */

// ========================================
// PRODUCT DATA
// ========================================

const products = [
    // ============ PANTS - Jeans ============
    {
        id: 1,
        name: "Classic Slim Fit Jeans",
        category: "pants",
        subcategory: "Jeans Pants",
        price: 2499,
        discountedPrice: 1899,
        description: "Premium denim slim fit jeans with comfortable stretch. Perfect for casual and semi-formal occasions.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["navy", "black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=600", "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600", "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600"],
        isNew: true,
        popularity: 95
    },
    {
        id: 2,
        name: "Distressed Denim Jeans",
        category: "pants",
        subcategory: "Jeans Pants",
        price: 2799,
        discountedPrice: 2199,
        description: "Trendy distressed jeans with authentic worn-in look. High-quality cotton blend for durability.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "grey"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600", "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600"],
        isNew: false,
        popularity: 88
    },
    // ============ PANTS - Cotton ============
    {
        id: 3,
        name: "Premium Cotton Chinos",
        category: "pants",
        subcategory: "Cotton Pants",
        price: 1999,
        discountedPrice: 1499,
        description: "Soft breathable cotton chinos. Ideal for everyday wear with a smart casual look.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["beige", "navy", "olive"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600", "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"],
        isNew: false,
        popularity: 92
    },
    {
        id: 4,
        name: "Relaxed Fit Cotton Pants",
        category: "pants",
        subcategory: "Cotton Pants",
        price: 1799,
        discountedPrice: 1399,
        description: "Comfortable relaxed fit cotton pants with elastic waistband. Perfect for lounging and casual outings.",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["grey", "black", "beige"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"],
        isNew: false,
        popularity: 78
    },
    // ============ PANTS - Trousers ============
    {
        id: 5,
        name: "Formal Pleated Trousers",
        category: "pants",
        subcategory: "Trousers",
        price: 2999,
        discountedPrice: 2499,
        description: "Elegant pleated trousers for formal occasions. Crafted from premium wool blend fabric.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "navy", "grey"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"],
        isNew: true,
        popularity: 85
    },
    {
        id: 6,
        name: "Tailored Slim Trousers",
        category: "pants",
        subcategory: "Trousers",
        price: 3299,
        discountedPrice: 2799,
        description: "Impeccably tailored slim-fit trousers. Perfect for business meetings and formal events.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600"],
        isNew: false,
        popularity: 80
    },
    // ============ PANTS - Track Pants ============
    {
        id: 7,
        name: "Athletic Track Pants",
        category: "pants",
        subcategory: "Track Pants",
        price: 1599,
        discountedPrice: 1199,
        description: "Lightweight athletic track pants with moisture-wicking fabric. Ideal for workouts and sports.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black", "navy", "grey"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"],
        isNew: false,
        popularity: 90
    },
    {
        id: 8,
        name: "Jogger Track Pants",
        category: "pants",
        subcategory: "Track Pants",
        price: 1899,
        discountedPrice: 1499,
        description: "Modern jogger-style track pants with tapered fit. Features side pockets and elastic ankles.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "olive", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600"],
        isNew: true,
        popularity: 87
    },
    // ============ PANTS - Baggy ============
    {
        id: 9,
        name: "Vintage Baggy Jeans",
        category: "pants",
        subcategory: "Baggy Pants",
        price: 2699,
        discountedPrice: 2099,
        description: "90s-inspired baggy jeans with relaxed fit. Made from heavyweight denim for authentic vintage feel.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600"],
        isNew: false,
        popularity: 75
    },
    {
        id: 10,
        name: "Wide Leg Cargo Pants",
        category: "pants",
        subcategory: "Baggy Pants",
        price: 2299,
        discountedPrice: 1799,
        description: "Utility-inspired wide leg cargo pants with multiple pockets. Perfect for streetwear looks.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["olive", "black", "beige"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600"],
        isNew: true,
        popularity: 82
    },

    // ============ SHIRTS ============
    {
        id: 11,
        name: "Classic Oxford Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 1999,
        discountedPrice: 1599,
        description: "Timeless Oxford cloth button-down shirt. Made from 100% premium cotton with button-down collar.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "navy", "beige"],
        stock: "in-stock",
        images: ["images/shirt11.avif", "images/shirt12.avif", "images/shirt13.jpg"],
        isNew: false,
        popularity: 96
    },
    {
        id: 12,
        name: "Linen Summer Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 2299,
        discountedPrice: 1799,
        description: "Breathable linen shirt perfect for summer. Relaxed fit with a casual spread collar.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "beige", "olive"],
        stock: "in-stock",
        images: ["images/shirt21.avif", "images/shirt22.avif", "images/shirt23.avif"],
        isNew: true,
        popularity: 89
    },
    {
        id: 13,
        name: "Slim Fit Dress Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 2499,
        discountedPrice: 1999,
        description: "Elegant slim-fit dress shirt for formal occasions. Features French cuffs and spread collar.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "navy", "black"],
        stock: "in-stock",
        images: ["images/shirt31.avif", "images/shirt32.avif", "images/shirt33.avif"],
        isNew: false,
        popularity: 91
    },
    {
        id: 14,
        name: "Flannel Check Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 1899,
        discountedPrice: 1499,
        description: "Warm flannel shirt with classic check pattern. Perfect for layering in cooler weather.",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["burgundy", "navy", "grey"],
        stock: "in-stock",
        images: ["images/shirt41.avif", "images/shirt42.avif", "images/shirt43.avif"],
        isNew: false,
        popularity: 84
    },
    {
        id: 15,
        name: "Chambray Casual Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 1799,
        discountedPrice: 1399,
        description: "Versatile chambray shirt with a soft, worn-in feel. Great for casual and smart-casual occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "grey"],
        stock: "in-stock",
        images: ["images/shirt51.avif", "images/shirt52.avif", "images/shirt53.avif"],
        isNew: true,
        popularity: 86
    },
    {
        id: 16,
        name: "Mandarin Collar Shirt",
        category: "shirts",
        subcategory: "Shirts",
        price: 2199,
        discountedPrice: 1699,
        description: "Modern mandarin collar shirt with clean minimal design. Perfect for contemporary styling.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "black", "navy"],
        stock: "in-stock",
        images: ["images/shirt61.avif", "images/shirt62.avif", "images/shirt63.avif"],
        isNew: false,
        popularity: 79
    },

    // ============ T-SHIRTS ============
    {
        id: 17,
        name: "Essential Crew Neck Tee",
        category: "tshirts",
        subcategory: "T-Shirts",
        price: 799,
        discountedPrice: 599,
        description: "Everyday essential crew neck t-shirt. Made from soft combed cotton for ultimate comfort.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "black", "navy", "grey"],
        stock: "in-stock",
        images: ["images/tshirt11.avif", "images/tshirt12.avif", "images/tshirt13.avif"],
        isNew: false,
        popularity: 98
    },
    {
        id: 18,
        name: "Graphic Print T-Shirt",
        category: "tshirts",
        subcategory: "T-Shirts",
        price: 999,
        discountedPrice: 749,
        description: "Bold graphic print t-shirt with contemporary design. High-quality screen printing that lasts.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "white", "navy"],
        stock: "in-stock",
        images: ["images/tshirt21.avif", "images/tshirt22.avif", "images/tshirt23.avif"],
        isNew: true,
        popularity: 93
    },
    {
        id: 19,
        name: "V-Neck Slim Fit Tee",
        category: "tshirts",
        subcategory: "T-Shirts",
        price: 899,
        discountedPrice: 699,
        description: "Flattering V-neck t-shirt with slim fit silhouette. Perfect for layering or wearing alone.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "black", "grey", "navy"],
        stock: "in-stock",
        images: ["images/tshirt31.avif", "images/tshirt32.avif", "images/tshirt33.avif"],
        isNew: false,
        popularity: 88
    },
    {
        id: 20,
        name: "Oversized Drop Shoulder Tee",
        category: "tshirts",
        subcategory: "T-Shirts",
        price: 1199,
        discountedPrice: 899,
        description: "Trendy oversized t-shirt with drop shoulder design. Streetwear-inspired relaxed fit.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "beige", "olive"],
        stock: "in-stock",
        images: ["images/tshhirt41.avif", "images/tshirt42.avif", "images/tshirt43.avif"],
        isNew: true,
        popularity: 91
    },
    {
        id: 21,
        name: "Premium Pima Cotton Tee",
        category: "tshirts",
        subcategory: "T-Shirts",
        price: 1499,
        discountedPrice: 1199,
        description: "Luxurious Pima cotton t-shirt with exceptional softness. Elevated basic for the discerning customer.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "black", "navy"],
        stock: "in-stock",
        images: ["images/tshirt51.avif", "images/tshir52.avif", "images/tshirt53.avif"],
        isNew: false,
        popularity: 85
    },

    // ============ POLO SHIRTS ============
    {
        id: 22,
        name: "Classic Pique Polo",
        category: "polo",
        subcategory: "Polo Shirts",
        price: 1599,
        discountedPrice: 1299,
        description: "Timeless pique cotton polo shirt. Features ribbed collar and two-button placket.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "navy", "black", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&h=800&fit=crop", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop"],
        isNew: false,
        popularity: 94
    },
    {
        id: 23,
        name: "Striped Sport Polo",
        category: "polo",
        subcategory: "Polo Shirts",
        price: 1799,
        discountedPrice: 1399,
        description: "Sporty striped polo with contrast collar. Perfect for golf, tennis, or casual outings.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "white", "grey"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600"],
        isNew: true,
        popularity: 87
    },
    {
        id: 24,
        name: "Slim Fit Jersey Polo",
        category: "polo",
        subcategory: "Polo Shirts",
        price: 1699,
        discountedPrice: 1349,
        description: "Modern slim-fit polo in soft jersey fabric. Clean minimal design with concealed placket.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "navy", "olive"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600"],
        isNew: false,
        popularity: 82
    },
    {
        id: 25,
        name: "Performance Polo",
        category: "polo",
        subcategory: "Polo Shirts",
        price: 1999,
        discountedPrice: 1599,
        description: "Technical performance polo with moisture-wicking fabric. Ideal for active lifestyles.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "black", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600"],
        isNew: true,
        popularity: 89
    },
    {
        id: 26,
        name: "Textured Knit Polo",
        category: "polo",
        subcategory: "Polo Shirts",
        price: 2199,
        discountedPrice: 1799,
        description: "Elevated textured knit polo with sophisticated appeal. Perfect for smart-casual occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["beige", "navy", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"],
        isNew: false,
        popularity: 78
    },

    // ============ HOODIES ============
    {
        id: 27,
        name: "Classic Pullover Hoodie",
        category: "hoodies",
        subcategory: "Hoodies",
        price: 2499,
        discountedPrice: 1999,
        description: "Essential pullover hoodie in heavyweight cotton fleece. Features kangaroo pocket and drawstring hood.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black", "grey", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600", "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600"],
        isNew: false,
        popularity: 97
    },
    {
        id: 28,
        name: "Zip-Up Track Hoodie",
        category: "hoodies",
        subcategory: "Hoodies",
        price: 2799,
        discountedPrice: 2299,
        description: "Versatile zip-up hoodie with athletic styling. Perfect for layering and active wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "grey", "olive"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1542327897-d73f4005b533?w=600"],
        isNew: true,
        popularity: 92
    },
    {
        id: 29,
        name: "Oversized Streetwear Hoodie",
        category: "hoodies",
        subcategory: "Hoodies",
        price: 2999,
        discountedPrice: 2499,
        description: "Trendy oversized hoodie with drop shoulders. Streetwear-inspired with bold silhouette.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "beige", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600"],
        isNew: true,
        popularity: 90
    },
    {
        id: 30,
        name: "Premium French Terry Hoodie",
        category: "hoodies",
        subcategory: "Hoodies",
        price: 3299,
        discountedPrice: 2799,
        description: "Luxurious French terry hoodie with refined details. Elevated comfort for everyday luxury.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["grey", "navy", "black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600"],
        isNew: false,
        popularity: 86
    },
    {
        id: 31,
        name: "Graphic Logo Hoodie",
        category: "hoodies",
        subcategory: "Hoodies",
        price: 2699,
        discountedPrice: 2199,
        description: "Statement hoodie with bold logo graphic. High-quality print that stands the test of time.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black", "white", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop"],
        isNew: false,
        popularity: 88
    },

    // ============ JACKETS ============
    {
        id: 32,
        name: "Classic Denim Jacket",
        category: "jackets",
        subcategory: "Jackets",
        price: 3499,
        discountedPrice: 2899,
        description: "Iconic denim jacket in authentic washed finish. Timeless layering piece for any wardrobe.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600", "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600"],
        isNew: false,
        popularity: 95
    },
    {
        id: 33,
        name: "Leather Biker Jacket",
        category: "jackets",
        subcategory: "Jackets",
        price: 7999,
        discountedPrice: 6499,
        description: "Premium leather biker jacket with asymmetric zip. Genuine leather with quilted lining.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "brown"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"],
        isNew: true,
        popularity: 91
    },
    {
        id: 34,
        name: "Bomber Jacket",
        category: "jackets",
        subcategory: "Jackets",
        price: 3999,
        discountedPrice: 3299,
        description: "Classic bomber jacket with ribbed cuffs and hem. Versatile style for casual and streetwear looks.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "olive", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"],
        isNew: false,
        popularity: 93
    },
    {
        id: 35,
        name: "Quilted Puffer Jacket",
        category: "jackets",
        subcategory: "Jackets",
        price: 4499,
        discountedPrice: 3699,
        description: "Warm quilted puffer jacket with synthetic insulation. Perfect for cold weather with modern styling.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["black", "navy", "olive"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop"],
        isNew: true,
        popularity: 89
    },
    {
        id: 36,
        name: "Harrington Jacket",
        category: "jackets",
        subcategory: "Jackets",
        price: 3299,
        discountedPrice: 2699,
        description: "British-inspired Harrington jacket with tartan lining. Lightweight and versatile for year-round wear.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["navy", "black", "beige"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600"],
        isNew: false,
        popularity: 84
    },

    // ============ SWEATERS ============
    {
        id: 37,
        name: "Merino Wool Crew Neck",
        category: "sweaters",
        subcategory: "Sweaters",
        price: 3499,
        discountedPrice: 2899,
        description: "Luxurious merino wool sweater with classic crew neck. Ultra-soft and temperature-regulating.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["grey", "navy", "black", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600", "https://images.unsplash.com/photo-1614495039153-e9cd13240469?w=600"],
        isNew: false,
        popularity: 92
    },
    {
        id: 38,
        name: "Cable Knit Sweater",
        category: "sweaters",
        subcategory: "Sweaters",
        price: 3799,
        discountedPrice: 3199,
        description: "Classic cable knit sweater with traditional Aran pattern. Cozy warmth with heritage appeal.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["beige", "grey", "navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600"],
        isNew: true,
        popularity: 88
    },
    {
        id: 39,
        name: "Cashmere V-Neck Sweater",
        category: "sweaters",
        subcategory: "Sweaters",
        price: 5999,
        discountedPrice: 4999,
        description: "Premium cashmere V-neck sweater of exceptional quality. Incredibly soft and lightweight warmth.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["grey", "navy", "beige"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1609873814058-a8928924184a?w=600"],
        isNew: false,
        popularity: 85
    },
    {
        id: 40,
        name: "Turtleneck Sweater",
        category: "sweaters",
        subcategory: "Sweaters",
        price: 2999,
        discountedPrice: 2499,
        description: "Elegant turtleneck sweater in fine-gauge knit. Sophisticated layering piece for smart occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "grey", "burgundy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop"],
        isNew: true,
        popularity: 87
    },
    {
        id: 41,
        name: "Cardigan Sweater",
        category: "sweaters",
        subcategory: "Sweaters",
        price: 3299,
        discountedPrice: 2699,
        description: "Versatile button-front cardigan in soft cotton blend. Perfect for layering in any season.",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["grey", "navy", "beige"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop"],
        isNew: false,
        popularity: 83
    },

    // ============ PERFUMES (First Copy Luxury) ============
    {
        id: 42,
        name: "Noir Essence",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 2999,
        discountedPrice: 1999,
        description: "First Copy Luxury. Inspired by Dior Sauvage. Bold masculine fragrance with notes of bergamot, pepper, and ambroxan. Long-lasting 8-10 hours.",
        sizes: ["100ml"],
        colors: ["black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=600", "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600"],
        isNew: true,
        popularity: 96
    },
    {
        id: 43,
        name: "Aqua Bleu",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 3499,
        discountedPrice: 2499,
        description: "First Copy Luxury. Inspired by Bleu de Chanel. Sophisticated woody aromatic scent with mint, grapefruit, and sandalwood.",
        sizes: ["100ml"],
        colors: ["navy"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"],
        isNew: false,
        popularity: 94
    },
    {
        id: 44,
        name: "Tobacco Oud",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 3999,
        discountedPrice: 2799,
        description: "First Copy Luxury. Inspired by Tom Ford Tobacco Oud. Rich oriental fragrance with tobacco, oud, and spicy cinnamon notes.",
        sizes: ["100ml"],
        colors: ["brown"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"],
        isNew: true,
        popularity: 91
    },
    {
        id: 45,
        name: "Aventus Legend",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 4499,
        discountedPrice: 2999,
        description: "First Copy Luxury. Inspired by Creed Aventus. Iconic fruity-smoky scent with pineapple, birch, and musk. A power fragrance.",
        sizes: ["100ml"],
        colors: ["black"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600"],
        isNew: false,
        popularity: 98
    },
    {
        id: 46,
        name: "Oud Wood Noir",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 3799,
        discountedPrice: 2699,
        description: "First Copy Luxury. Inspired by Tom Ford Oud Wood. Exotic blend of oud, rosewood, cardamom, and Chinese pepper.",
        sizes: ["100ml"],
        colors: ["brown"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600"],
        isNew: false,
        popularity: 89
    },
    {
        id: 47,
        name: "Invictus Sport",
        category: "perfumes",
        subcategory: "Perfumes",
        price: 2499,
        discountedPrice: 1799,
        description: "First Copy Luxury. Inspired by Paco Rabanne Invictus. Fresh athletic scent with marine accord, grapefruit, and guaiac wood.",
        sizes: ["100ml"],
        colors: ["grey"],
        stock: "in-stock",
        images: ["https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600"],
        isNew: true,
        popularity: 92
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let cart = JSON.parse(localStorage.getItem('wardrobeJamiaCart')) || [];
let filteredProducts = [...products];
let activeFilters = {
    categories: [],
    sizes: [],
    colors: [],
    minPrice: 0,
    maxPrice: 10000,
    sortBy: 'popularity'
};

// ========================================
// DOM ELEMENTS
// ========================================

const productsGrid = document.getElementById('productsGrid');
const productCount = document.getElementById('productCount');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const quickViewModal = document.getElementById('quickViewModal');
const quickViewOverlay = document.getElementById('quickViewOverlay');
const quickViewContent = document.getElementById('quickViewContent');
const noResults = document.getElementById('noResults');
const sortBySelect = document.getElementById('sortBy');
const filterSidebar = document.getElementById('filterSidebar');
const mobileFilterToggle = document.getElementById('mobileFilterToggle');
const mobileNav = document.getElementById('mobileNav');
const menuToggle = document.getElementById('menuToggle');
const toastContainer = document.getElementById('toastContainer');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    renderProducts();
    updateCartUI();
    updateCategoryCounts();
    setupEventListeners();
});

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Cart
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Quick View
    document.getElementById('quickViewClose').addEventListener('click', closeQuickView);
    quickViewOverlay.addEventListener('click', closeQuickView);

    // Sort
    sortBySelect.addEventListener('change', (e) => {
        activeFilters.sortBy = e.target.value;
        applyFilters();
    });

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            if (category === 'all') {
                activeFilters.categories = [];
            } else {
                activeFilters.categories = [category];
            }
            // Update checkbox filters
            document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => {
                cb.checked = activeFilters.categories.includes(cb.value);
            });
            applyFilters();
        });
    });

    // Filter checkboxes
    document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const checkedCategories = Array.from(document.querySelectorAll('#categoryFilters input:checked')).map(c => c.value);
            activeFilters.categories = checkedCategories;
            applyFilters();
        });
    });

    // Size buttons
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const activeSizes = Array.from(document.querySelectorAll('.size-btn.active')).map(b => b.dataset.size);
            activeFilters.sizes = activeSizes;
            applyFilters();
        });
    });

    // Color buttons
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const activeColors = Array.from(document.querySelectorAll('.color-btn.active')).map(b => b.dataset.color);
            activeFilters.colors = activeColors;
            applyFilters();
        });
    });

    // Price filters
    document.getElementById('minPrice').addEventListener('input', debounce((e) => {
        activeFilters.minPrice = parseInt(e.target.value) || 0;
        applyFilters();
    }, 300));

    document.getElementById('maxPrice').addEventListener('input', debounce((e) => {
        activeFilters.maxPrice = parseInt(e.target.value) || 10000;
        applyFilters();
    }, 300));

    document.getElementById('priceSlider').addEventListener('input', (e) => {
        activeFilters.maxPrice = parseInt(e.target.value);
        document.getElementById('maxPrice').value = e.target.value;
        applyFilters();
    });

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);

    // Mobile filter toggle
    mobileFilterToggle.addEventListener('click', () => {
        filterSidebar.classList.toggle('active');
    });

    // Mobile navigation
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });

    document.getElementById('mobileNavClose').addEventListener('click', closeMobileNav);

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (filterSidebar.classList.contains('active') &&
            !filterSidebar.contains(e.target) &&
            !mobileFilterToggle.contains(e.target)) {
            filterSidebar.classList.remove('active');
        }
    });
}

// ========================================
// FILTER FUNCTIONS
// ========================================

function initializeFilters() {
    // Set initial price range
    const prices = products.map(p => p.discountedPrice);
    const maxPrice = Math.max(...prices);
    document.getElementById('priceSlider').max = maxPrice;
    activeFilters.maxPrice = maxPrice;
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        // Category filter
        if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(product.category)) {
            return false;
        }

        // Size filter
        if (activeFilters.sizes.length > 0 && !activeFilters.sizes.some(size => product.sizes.includes(size))) {
            return false;
        }

        // Color filter
        if (activeFilters.colors.length > 0 && !activeFilters.colors.some(color => product.colors.includes(color))) {
            return false;
        }

        // Price filter
        if (product.discountedPrice < activeFilters.minPrice || product.discountedPrice > activeFilters.maxPrice) {
            return false;
        }

        return true;
    });

    // Apply sorting
    switch (activeFilters.sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        case 'popularity':
        default:
            filteredProducts.sort((a, b) => b.popularity - a.popularity);
            break;
    }

    renderProducts();
}

function clearAllFilters() {
    activeFilters = {
        categories: [],
        sizes: [],
        colors: [],
        minPrice: 0,
        maxPrice: 10000,
        sortBy: 'popularity'
    };

    // Reset UI
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.category-btn[data-category="all"]').classList.add('active');
    document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('priceSlider').value = 10000;
    sortBySelect.value = 'popularity';

    applyFilters();
}

function filterByCategory(category) {
    if (category === 'all') {
        activeFilters.categories = [];
    } else {
        activeFilters.categories = [category];
    }

    // Update category buttons
    document.querySelectorAll('.category-btn').forEach(b => {
        b.classList.remove('active');
        if (b.dataset.category === category) {
            b.classList.add('active');
        }
    });

    // Update checkboxes
    document.querySelectorAll('#categoryFilters input[type="checkbox"]').forEach(cb => {
        cb.checked = activeFilters.categories.includes(cb.value);
    });

    applyFilters();

    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function updateCategoryCounts() {
    const counts = {};
    products.forEach(product => {
        counts[product.category] = (counts[product.category] || 0) + 1;
    });

    document.querySelectorAll('[data-count]').forEach(el => {
        const category = el.dataset.count;
        el.textContent = `(${counts[category] || 0})`;
    });
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderProducts() {
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '';
        noResults.style.display = 'block';
        productCount.textContent = '0';
        return;
    }

    noResults.style.display = 'none';
    productCount.textContent = filteredProducts.length;

    productsGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card" onclick="openQuickView(${product.id})">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <div class="product-badges">
          ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${product.price > product.discountedPrice ? '<span class="badge badge-sale">Sale</span>' : ''}
          ${product.stock === 'out-of-stock' ? '<span class="badge badge-out">Sold Out</span>' : ''}
        </div>
        <div class="product-actions">
          <button class="quick-view-btn" onclick="event.stopPropagation(); openQuickView(${product.id})">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.subcategory}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="price-current">₹${product.discountedPrice.toLocaleString()}</span>
          ${product.price > product.discountedPrice ? `
            <span class="price-original">₹${product.price.toLocaleString()}</span>
            <span class="price-discount">-${Math.round((1 - product.discountedPrice / product.price) * 100)}%</span>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

// ========================================
// QUICK VIEW MODAL
// ========================================

function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    quickViewContent.innerHTML = `
    <div class="product-detail-grid" style="grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div class="product-gallery">
        <div class="gallery-thumbs">
          ${product.images.map((img, i) => `
            <div class="thumb ${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
              <img src="${img}" alt="${product.name} view ${i + 1}">
            </div>
          `).join('')}
        </div>
        <div class="gallery-main">
          <img id="mainProductImage" src="${product.images[0]}" alt="${product.name}">
        </div>
      </div>
      <div class="product-detail-info">
        <p class="product-detail-category">${product.subcategory}</p>
        <h2 class="product-detail-title">${product.name}</h2>
        <div class="product-detail-price">
          <span class="detail-price-current">₹${product.discountedPrice.toLocaleString()}</span>
          ${product.price > product.discountedPrice ? `
            <span class="detail-price-original">₹${product.price.toLocaleString()}</span>
            <span class="detail-price-discount">-${Math.round((1 - product.discountedPrice / product.price) * 100)}%</span>
          ` : ''}
        </div>
        <p class="product-detail-description">${product.description}</p>
        
        ${product.sizes.length > 1 || product.sizes[0] !== '100ml' ? `
          <div class="detail-section">
            <h4 class="detail-section-title">Size</h4>
            <div class="detail-sizes">
              ${product.sizes.map((size, i) => `
                <button class="detail-size-btn ${i === 0 ? 'active' : ''}" onclick="selectSize(this, '${size}')" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        <div class="detail-section">
          <h4 class="detail-section-title">Color</h4>
          <div class="detail-colors">
            ${product.colors.map((color, i) => `
              <button class="detail-color-btn ${i === 0 ? 'active' : ''}" style="background: ${getColorHex(color)}" onclick="selectColor(this)" data-color="${color}" title="${color}"></button>
            `).join('')}
          </div>
        </div>
        
        <div class="detail-section">
          <h4 class="detail-section-title">Quantity</h4>
          <div class="quantity-selector">
            <button class="qty-btn" onclick="updateQuantity(-1)">−</button>
            <input type="number" class="qty-input" id="quantityInput" value="1" min="1" max="10">
            <button class="qty-btn" onclick="updateQuantity(1)">+</button>
          </div>
        </div>
        
        <div class="detail-actions">
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 'out-of-stock' ? 'disabled' : ''}>
            ${product.stock === 'out-of-stock' ? 'Sold Out' : 'Add to Cart'}
          </button>
          <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

    quickViewModal.classList.add('active');
    quickViewOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    quickViewModal.classList.remove('active');
    quickViewOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function changeMainImage(src, thumbEl) {
    document.getElementById('mainProductImage').src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

function selectSize(btn, size) {
    document.querySelectorAll('.detail-size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function selectColor(btn) {
    document.querySelectorAll('.detail-color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function updateQuantity(change) {
    const input = document.getElementById('quantityInput');
    let value = parseInt(input.value) + change;
    value = Math.max(1, Math.min(10, value));
    input.value = value;
}

function getColorHex(color) {
    const colors = {
        black: '#1A1A1A',
        white: '#FFFFFF',
        navy: '#1E3A5F',
        grey: '#808080',
        brown: '#8B4513',
        beige: '#F5F5DC',
        olive: '#556B2F',
        burgundy: '#722F37'
    };
    return colors[color] || color;
}

// ========================================
// CART FUNCTIONS
// ========================================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 'out-of-stock') return;

    const selectedSize = document.querySelector('.detail-size-btn.active')?.dataset.size || product.sizes[0];
    const selectedColor = document.querySelector('.detail-color-btn.active')?.dataset.color || product.colors[0];
    const quantity = parseInt(document.getElementById('quantityInput')?.value) || 1;

    const cartItemId = `${productId}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            cartItemId,
            productId,
            name: product.name,
            price: product.discountedPrice,
            image: product.images[0],
            size: selectedSize,
            color: selectedColor,
            quantity
        });
    }

    saveCart();
    updateCartUI();
    closeQuickView();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    updateCartUI();
}

function updateCartItemQuantity(cartItemId, change) {
    const item = cart.find(i => i.cartItemId === cartItemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('wardrobeJamiaCart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        cartItems.innerHTML = '';
        cartItems.appendChild(cartEmpty);
    } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartSubtotal.textContent = `₹${subtotal.toLocaleString()}`;

        cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-variant">Size: ${item.size} / Color: ${item.color}</p>
          <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
          <div class="cart-item-qty">
            <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.cartItemId}', -1)">−</button>
            <span>${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateCartItemQuantity('${item.cartItemId}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.cartItemId}')">Remove</button>
      </div>
    `).join('');
    }
}

function openCart() {
    cartModal.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function checkout() {
    if (cart.length === 0) return;
    closeCart();
    openCheckout();
}

// ========================================
// CHECKOUT MODAL FUNCTIONS
// ========================================

let currentStep = 1;
const checkoutModal = document.getElementById('checkoutModal');
const checkoutOverlay = document.getElementById('checkoutOverlay');

function openCheckout() {
    currentStep = 1;
    updateCheckoutUI();
    updateCheckoutSummary();
    checkoutModal.classList.add('active');
    checkoutOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Listen for UPI app selection
    document.querySelectorAll('input[name="upiApp"]').forEach(input => {
        input.addEventListener('change', handleUpiAppChange);
    });
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
    checkoutOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function goToStep(step) {
    if (step < 1 || step > 3) return;

    // Validate current step before moving forward
    if (step > currentStep) {
        if (currentStep === 1 && !validateAddressForm()) {
            showToast('Please fill in all required fields', 'error');
            return;
        }
    }

    // Mark previous steps as completed
    document.querySelectorAll('.checkout-steps .step').forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        if (index + 1 < step) {
            stepEl.classList.add('completed');
        } else if (index + 1 === step) {
            stepEl.classList.add('active');
        }
    });

    currentStep = step;
    updateCheckoutUI();

    // Populate review on step 3
    if (step === 3) {
        populateOrderReview();
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        goToStep(currentStep - 1);
    } else {
        closeCheckout();
    }
}

function handleCheckoutContinue() {
    if (currentStep === 1) {
        if (validateAddressForm()) {
            goToStep(2);
        } else {
            showToast('Please fill in all required fields', 'error');
        }
    } else if (currentStep === 2) {
        goToStep(3);
    } else if (currentStep === 3) {
        placeOrder();
    }
}

function updateCheckoutUI() {
    // Update step visibility
    document.querySelectorAll('.checkout-step').forEach((step, index) => {
        step.classList.toggle('active', index + 1 === currentStep);
    });

    // Update button text
    const btnText = document.getElementById('checkoutBtnText');
    if (currentStep === 1) {
        btnText.textContent = 'Continue to Payment';
    } else if (currentStep === 2) {
        btnText.textContent = 'Review Order';
    } else {
        btnText.textContent = 'Place Order';
    }

    // Hide back button on step 1
    document.getElementById('checkoutBack').style.opacity = currentStep === 1 ? '0.3' : '1';
}

function updateCheckoutSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.getElementById('checkoutItemCount').textContent = `${totalItems} item${totalItems > 1 ? 's' : ''}`;
    document.getElementById('checkoutTotal').textContent = `₹${subtotal.toLocaleString()}`;
}

function validateAddressForm() {
    const requiredFields = ['fullName', 'phone', 'address1', 'city', 'state', 'pincode'];
    let isValid = true;

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const value = field.value.trim();

        if (!value) {
            field.classList.add('error');
            field.classList.remove('valid');
            isValid = false;
        } else {
            field.classList.remove('error');
            field.classList.add('valid');
        }
    });

    // Validate phone format
    const phone = document.getElementById('phone').value;
    if (phone && !/^\d{10}$/.test(phone)) {
        document.getElementById('phone').classList.add('error');
        isValid = false;
    }

    // Validate pincode format
    const pincode = document.getElementById('pincode').value;
    if (pincode && !/^\d{6}$/.test(pincode)) {
        document.getElementById('pincode').classList.add('error');
        isValid = false;
    }

    return isValid;
}

function switchPaymentMethod(method) {
    document.querySelectorAll('.payment-details').forEach(el => {
        el.classList.remove('active');
    });

    if (method === 'upi') {
        document.getElementById('upiDetails').classList.add('active');
    } else if (method === 'card') {
        document.getElementById('cardDetails').classList.add('active');
    } else if (method === 'cod') {
        document.getElementById('codDetails').classList.add('active');
    }
}

function handleUpiAppChange(e) {
    const upiIdInput = document.getElementById('upiIdInput');
    if (e.target.value === 'other') {
        upiIdInput.style.display = 'block';
    } else {
        upiIdInput.style.display = 'none';
    }
}

function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    input.value = value.substring(0, 19);

    // Detect card type
    const cardTypes = document.querySelectorAll('.card-type');
    cardTypes.forEach(ct => ct.classList.remove('active'));

    const num = value.replace(/\s/g, '');
    if (num.startsWith('4')) {
        document.querySelector('.card-type.visa').classList.add('active');
    } else if (num.startsWith('5') || num.startsWith('2')) {
        document.querySelector('.card-type.mastercard').classList.add('active');
    } else if (num.startsWith('6') || num.startsWith('82') || num.startsWith('508')) {
        document.querySelector('.card-type.rupay').classList.add('active');
    }
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

function populateOrderReview() {
    // Address
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const address1 = document.getElementById('address1').value;
    const address2 = document.getElementById('address2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state');
    const stateName = state.options[state.selectedIndex].text;
    const pincode = document.getElementById('pincode').value;
    const addressType = document.querySelector('input[name="addressType"]:checked').value;

    document.getElementById('reviewAddress').innerHTML = `
        <strong>${fullName}</strong><br>
        ${address1}${address2 ? ', ' + address2 : ''}<br>
        ${city}, ${stateName} - ${pincode}<br>
        Phone: ${phone}<br>
        <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-accent);">${addressType}</span>
    `;

    // Payment
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    let paymentText = '';
    if (paymentMethod === 'upi') {
        const upiApp = document.querySelector('input[name="upiApp"]:checked').value;
        const upiNames = { gpay: 'Google Pay', phonepe: 'PhonePe', paytm: 'Paytm', other: 'UPI' };
        paymentText = upiNames[upiApp] || 'UPI';
    } else if (paymentMethod === 'card') {
        const cardNum = document.getElementById('cardNumber').value;
        paymentText = cardNum ? `Card ending in ${cardNum.slice(-4)}` : 'Credit/Debit Card';
    } else {
        paymentText = 'Cash on Delivery';
    }
    document.getElementById('reviewPayment').innerHTML = `<strong>${paymentText}</strong>`;

    // Items
    const reviewItems = document.getElementById('reviewItems');
    reviewItems.innerHTML = cart.map(item => `
        <div class="review-item">
            <div class="review-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="review-item-info">
                <p class="review-item-name">${item.name}</p>
                <p class="review-item-details">Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}</p>
            </div>
            <p class="review-item-price">₹${(item.price * item.quantity).toLocaleString()}</p>
        </div>
    `).join('');

    // Totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 2999 ? 0 : 99;
    const total = subtotal + shipping;

    document.getElementById('reviewSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('reviewShipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
    document.getElementById('reviewTotal').textContent = `₹${total.toLocaleString()}`;
}

function placeOrder() {
    // Generate professional numeric order ID: WJ + YYYYMMDD + 8-digit random number
    const now = new Date();
    const datePart = now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');
    const randomPart = String(Math.floor(10000000 + Math.random() * 90000000));
    const orderId = 'WJ' + datePart + randomPart;
    document.getElementById('orderId').textContent = orderId;

    // Show success and hide review
    document.getElementById('orderReview').style.display = 'none';
    document.getElementById('orderSuccess').style.display = 'block';

    // Hide footer
    document.querySelector('.checkout-footer').style.display = 'none';

    // Clear cart
    cart = [];
    localStorage.setItem('wardrobeJamiaCart', JSON.stringify(cart));
    updateCartUI();

    showToast('Order placed successfully!');
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showToast(`${product.name} added to wishlist!`);
    }
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function closeMobileNav() {
    mobileNav.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
    <svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${type === 'error' ? 'M6 18L18 6M6 6l12 12' : 'M5 13l4 4L19 7'}" />
    </svg>
    <span>${message}</span>
  `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Make functions globally accessible
window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;
window.changeMainImage = changeMainImage;
window.selectSize = selectSize;
window.selectColor = selectColor;
window.updateQuantity = updateQuantity;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartItemQuantity = updateCartItemQuantity;
window.openCart = openCart;
window.closeCart = closeCart;
window.checkout = checkout;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.goToStep = goToStep;
window.goToPreviousStep = goToPreviousStep;
window.handleCheckoutContinue = handleCheckoutContinue;
window.switchPaymentMethod = switchPaymentMethod;
window.formatCardNumber = formatCardNumber;
window.formatExpiry = formatExpiry;
window.placeOrder = placeOrder;
window.addToWishlist = addToWishlist;
window.filterByCategory = filterByCategory;
window.closeMobileNav = closeMobileNav;

