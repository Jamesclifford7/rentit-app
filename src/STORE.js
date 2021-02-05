const user = [
    {
        id: 1,
        name: "John Smith", 
        username: "johnsmith1", 
        password: "smithjohn11",
        city: "Los Angeles", 
        profile_img: "",
        rental_history: [
            {
                item_name: "Saw", 
                category: 2, 
                rental_period: "4/10 - 4/15"
            }, 
            {
                item_name: "2 30lb Dumbbells", 
                category: 3, 
                rental_period: "2/6 - 1/9"
            }, 
            {
                item_name: "Fixed Gear Bike", 
                category: 4, 
                rental_period: "1/1 - 1/5"
            }
        ], 
        listed_items: [
            {
                id: 1,
                item_name: "Stand Up Paddle Board", 
                catgory: 4, 
                img_url: "https://cdn.shopify.com/s/files/1/0103/0448/7482/products/isupskiff20u-499___iskiff-106-inflatable-stand-up-paddle-board-isup-with-bag-paddle-pump__front.jpg?v=1576859442", 
                daily_cost: 30, 
                weekly_cost: 150
            }, 
            {
                id: 2,
                item_name: "Canon DSLR Camera", 
                catgory: 5, 
                img_url: "https://cdn.mos.cms.futurecdn.net/3khZK3kS9UJHD3cZCAxwn8.jpg", 
                daily_cost: 20, 
                weekly_cost: 100
            }
        ]
    }
]

const items = [
    {
        id: 1,
        item_name: "Stand Up Paddle Board With Paddle", 
        catgory: 4, 
        img_url: "https://cdn.shopify.com/s/files/1/0103/0448/7482/products/isupskiff20u-499___iskiff-106-inflatable-stand-up-paddle-board-isup-with-bag-paddle-pump__front.jpg?v=1576859442", 
        daily_cost: 40, 
        weekly_cost: 180, 
        owner: 'CharlieFrench24', 
        city: 'Los Angeles'
    }, 
    {
        id: 2,
        item_name: "Canon DSLR Camera with Bag and Strap", 
        catgory: 5, 
        img_url: "https://cdn.mos.cms.futurecdn.net/3khZK3kS9UJHD3cZCAxwn8.jpg", 
        daily_cost: 30, 
        weekly_cost: 120, 
        owner: 'ThelmaShaw21', 
        city: 'New York'
    }, 
    {
        id: 3,
        item_name: "AC Unit", 
        catgory: 1, 
        img_url: "https://sc02.alicdn.com/kf/HTB1gsu4KxWYBuNjy1zkq6xGGpXaX/230407826/HTB1gsu4KxWYBuNjy1zkq6xGGpXaX.jpg", 
        daily_cost: 20, 
        weekly_cost: 100, 
        owner: 'ThelmaShaw21', 
        city: 'New York'
    }, 
    {
        id: 4,
        item_name: "Flathead Screwdriver", 
        catgory: 2, 
        img_url: "https://images-na.ssl-images-amazon.com/images/I/61i5G6kx3CL._AC_SL1500_.jpg", 
        daily_cost: 5, 
        weekly_cost: 20, 
        owner: 'DuaneTorres64', 
        city: 'Chicago'
    }, 
    {
        id: 5,
        item_name: "25lb dumbbells", 
        catgory: 3, 
        img_url: "https://www.roguefitness.com/media/catalog/product/cache/1/image/1500x1500/9df78eab33525d08d6e5fb8d27136e95/r/o/rouge-dumbbells-th_1.jpg", 
        daily_cost: 5, 
        weekly_cost: 20, 
        owner: 'DuaneTorres64', 
        city: 'Chicago'
    }, 
    {
        id: 6,
        item_name: "Two Person Camping Tent", 
        catgory: 4, 
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71DPerT9EKL._AC_SL1500_.jpg", 
        daily_cost: 25, 
        weekly_cost: 80, 
        owner: 'MichelleBlack4', 
        city: 'Los Angeles'
    }, 
    {
        id: 7,
        item_name: "PA system", 
        catgory: 5, 
        img_url: "https://sep.yimg.com/ay/acekaraoke/yamaha-stagepas-400bt-pa-sys-w-bluetooth-acesonic-dgx-220-hdmi-karaoke-player-shure-pga58-vocal-mic-and-speaker-stand-7.jpg", 
        daily_cost: 40, 
        weekly_cost: 200, 
        owner: 'MichelleBlack4', 
        city: 'Los Angeles'
    }, 
    {
        id: 8,
        item_name: "Power Washer", 
        catgory: 1, 
        img_url: "https://www.greenworkstools.com/media/catalog/product/cache/bb52ad023e98f302afaaf563d47e6ba9/1/5/1500psi_pw.png", 
        daily_cost: 25, 
        weekly_cost: 80, 
        owner: 'EdHoward83', 
        city: 'New York'
    }, 
    {
        id: 9,
        item_name: "Hammer", 
        catgory: 2, 
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71tTWyypTKL._AC_SX679_.jpg", 
        daily_cost: 5, 
        weekly_cost: 30, 
        owner: 'EdHoward83', 
        city: 'New York'
    }, 
    {
        id: 10,
        item_name: "45lb Kettlebell", 
        catgory: 3, 
        img_url: "https://cdn11.bigcommerce.com/s-r2fl439k1s/images/stencil/1280x1280/products/234/788/HKB-45-Hammertone-Kettle-Bell-45lbs-Kettlebell__33453.1505411755.jpg?c=2", 
        daily_cost: 8, 
        weekly_cost: 30, 
        owner: 'KeithJefferson23', 
        city: 'Chicago'
    }, 
    {
        id: 11,
        item_name: "Bicycle", 
        catgory: 4, 
        img_url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Left_side_of_Flying_Pigeon.jpg", 
        daily_cost: 20, 
        weekly_cost: 180, 
        owner: 'KeithJefferson23', 
        city: 'Chicago'
    }, 
    {
        id: 12,
        item_name: "Acoustic Guiter", 
        catgory: 5, 
        img_url: "https://d1aeri3ty3izns.cloudfront.net/media/58/589071/1200/preview.jpg", 
        daily_cost: 15, 
        weekly_cost: 120, 
        owner: 'AngelaMack12', 
        city: 'Los Angeles'
    }, 
    {
        id: 13,
        item_name: "Vacuum", 
        catgory: 1, 
        img_url: "https://images.homedepot-static.com/productImages/190fb8b6-8e6f-4a76-abbe-6db5158306c6/svn/eureka-upright-vacuums-neu180-e1_600.jpg", 
        daily_cost: 10, 
        weekly_cost: 80, 
        owner: 'AngelaMack12', 
        city: 'Los Angeles'
    }, 
    {
        id: 14,
        item_name: "Power Drill", 
        catgory: 2, 
        img_url: "https://images-na.ssl-images-amazon.com/images/I/615zGgBSSOL._AC_SL1190_.jpg", 
        daily_cost: 15, 
        weekly_cost: 90, 
        owner: 'NickHolloway19', 
        city: 'New York'
    }, 
    {
        id: 15,
        item_name: "Bench Press", 
        catgory: 3, 
        img_url: "https://www.ironcompany.com/media/mf_webp/jpg/media/catalog/product/cache/6f1a31152d922b0fc4fa1becd54d81bb/l/e/legend-3906-comptetition-bench-press.webp", 
        daily_cost: 30, 
        weekly_cost: 120, 
        owner: 'NickHolloway19', 
        city: 'New York'
    }, 
    {
        id: 16,
        item_name: "Backpacking Backpack", 
        catgory: 4, 
        img_url: "https://cdn11.bigcommerce.com/s-c9gaghhv/images/stencil/1920x1440/products/3108/8071/22611620LYB_MAIN_Coyote85_Web_KL2020__46792.1582910015.jpg?c=2", 
        daily_cost: 20, 
        weekly_cost: 110, 
        owner: 'LanaSchultz70', 
        city: 'Chicago'
    }, 
    {
        id: 17,
        item_name: "Projector", 
        catgory: 5, 
        img_url: "https://www.bhphotovideo.com/images/images2500x2500/benq_mh733_1080p_4000_lumen_projector_1368371.jpg", 
        daily_cost: 12, 
        weekly_cost: 70, 
        owner: 'LanaSchultz70', 
        city: 'Chicago'
    }, 
    {
        id: 18,
        item_name: "Coffee Maker", 
        catgory: 1, 
        img_url: "https://i5.walmartimages.com/asr/16f77040-27ab-4008-9852-59c900d7a7d9_1.c524f1d9c465e122596bf65f939c8d26.jpeg", 
        daily_cost: 10, 
        weekly_cost: 50, 
        owner: 'EricEstrada37', 
        city: 'Los Angeles'
    }, 
    {
        id: 19,
        item_name: "Hand Saw", 
        catgory: 2, 
        img_url: "https://media.stokker.com/prod/l/080/192709080", 
        daily_cost: 10, 
        weekly_cost: 50, 
        owner: 'EricEstrada37', 
        city: 'Los Angeles'
    }, 
    {
        id: 20,
        item_name: "Basketball Hoop", 
        catgory: 3, 
        img_url: "https://www.competitiveedgeproducts.com/assets/images/1531_1_highres.jpg", 
        daily_cost: 60, 
        weekly_cost: 200, 
        owner: 'EricEstrada37', 
        city: 'Los Angeles'
    }, 
    {
        id: 21,
        item_name: "Telescope", 
        catgory: 5, 
        img_url: "https://media.wired.com/photos/5e964499845a6c00080f0f17/master/w_1600%2Cc_limit/Gear-22460_StarSense_Explorer_DX_102_06.jpg", 
        daily_cost: 70, 
        weekly_cost: 220, 
        owner: 'LukeMarsh50', 
        city: 'New York'
    }, 
    {
        id: 22,
        item_name: "Blender", 
        catgory: 1, 
        img_url: "https://cdn.shopify.com/s/files/1/2182/0257/products/TB_Black_WS_eba15545-6428-4e5c-a353-0aaada892c61_1200x1200.png?v=1569368000", 
        daily_cost: 15, 
        weekly_cost: 50, 
        owner: 'LukeMarsh50', 
        city: 'New York'
    }, 
    {
        id: 23,
        item_name: "3 Piece Wrench Set", 
        catgory: 2, 
        img_url: "https://shop.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/7/47099_W3.jpg", 
        daily_cost: 12, 
        weekly_cost: 40, 
        owner: 'ChristineSteele84', 
        city: 'Chicago'
    }, 
    {
        id: 24,
        item_name: "Baseball Bat", 
        catgory: 3, 
        img_url: "https://shop.slugger.com/media/catalog/product/cache/40/image/1800x/040ec09b1e35df139433887a97daa66f/9/1/9111f5a8905d47e7da8f1eaf62c826668e494f89_WTLW3AMIXA16_0_GENUINE_S3X_MIX_NAT_Front_2019.jpg", 
        daily_cost: 10, 
        weekly_cost: 35, 
        owner: 'ChristineSteele84', 
        city: 'Chicago'
    }, 
    {
        id: 25,
        item_name: "Go Pro Camera", 
        catgory: 5, 
        img_url: "https://www.backscatter.com/ITEM_IMAGES/gp-chdhe_1.jpg?resizeid=6&resizeh=600&resizew=600", 
        daily_cost: 20, 
        weekly_cost: 100, 
        owner: 'GregoryDaniels96', 
        city: 'Los Angeles'
    }, 
    {
        id: 26,
        item_name: "Portable Grill", 
        catgory: 1, 
        img_url: "https://images-na.ssl-images-amazon.com/images/I/71X0tRC2MsL._AC_SL1500_.jpg", 
        daily_cost: 15, 
        weekly_cost: 90, 
        owner: 'GregoryDaniels96', 
        city: 'Los Angeles'
    }, 
    {
        id: 27,
        item_name: "Pliers", 
        catgory: 2, 
        img_url: "https://assets.leevalley.com/Size4/10029/60K2302-mini-needle-nose-pliers-with-tip-cutters-f-55.jpg", 
        daily_cost: 8, 
        weekly_cost: 30, 
        owner: 'TerryPearson87', 
        city: 'New York'
    }, 
    {
        id: 28,
        item_name: "Golf Clubs", 
        catgory: 3, 
        img_url: "https://res-4.cloudinary.com/s247/image/upload/c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/media/catalog/product/a/c/accubar_12_pc_5_1__1.png", 
        daily_cost: 20, 
        weekly_cost: 100, 
        owner: 'TerryPearson87', 
        city: 'New York'
    }, 
    {
        id: 29,
        item_name: "Golf Clubs", 
        catgory: 3, 
        img_url: "https://res-4.cloudinary.com/s247/image/upload/c_pad,dpr_1.0,f_auto,h_800,q_auto,w_800/media/catalog/product/a/c/accubar_12_pc_5_1__1.png", 
        daily_cost: 20, 
        weekly_cost: 100, 
        owner: 'TerryPearson87', 
        city: 'New York'
    }, 
    {
        id: 30,
        item_name: "Lawn Chair", 
        catgory: 4, 
        img_url: "https://www.johndeerestore.com/medias/SCU80WGT-Media-JDActual1200Wx1200H?context=bWFzdGVyfHJvb3R8Mjc0NTA5fGltYWdlL2pwZWd8aGRhL2g3ZC84OTE1OTI5MzMzNzkwLmpwZ3wxZDhhZjE4YjAyMDRmZjU2ZWY5MjY5OTFjY2Q5NTE2ZjlmY2JjZjQyNGM4ZjUyNGRkNDg1ZmJhMWY0ZGEzZWNi", 
        daily_cost: 10, 
        weekly_cost: 50, 
        owner: 'ChristineSteele84', 
        city: 'Chicago'
    }
]

export default items