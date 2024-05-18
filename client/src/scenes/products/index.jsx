// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Collapse,
//   Button,
//   Typography,
//   Rating,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import Header from "components/Header";
// import { useGetProductsQuery } from "state/api";

// const Product = ({
//   _id,
//   name,
//   description,
//   price,
//   rating,
//   category,
//   units,
//   stat,
// }) => {
//   const theme = useTheme();
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <Card
//       sx={{
//         backgroundImage: "none",
//         backgroundColor: theme.palette.background.alt,
//         borderRadius: "0.55rem",
//       }}
//     >
//       <CardContent>
//         <Typography
//           sx={{ fontSize: 14 }}
//           color={theme.palette.secondary[700]}
//           gutterBottom
//         >
//           {category}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
//           ${Number(price).toFixed(2)}
//         </Typography>
//         <Rating value={rating} readOnly />

//         <Typography variant="body2">{description}</Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="primary"
//           size="small"
//           onClick={() => setIsExpanded(!isExpanded)}
//         >
//           See More
//         </Button>
//       </CardActions>
//       <Collapse
//         in={isExpanded}
//         timeout="auto"
//         unmountOnExit
//         sx={{
//           color: theme.palette.neutral[300],
//         }}
//       >
//         <CardContent>
//           <Typography>id: {_id}</Typography>
//           <Typography>Units Bought: {units}</Typography>
//           <Typography>
//             Yearly Profit This Year: {stat.yearlySalesTotal}
//           </Typography>
//           <Typography>
//             Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery();
//   const isNonMobile = useMediaQuery("(min-width: 1000px)");

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="PRODUCTS" subtitle="See your list of all your stocks." />
//       {data || !isLoading ? (
//         <Box
//           mt="20px"
//           display="grid"
//           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//           justifyContent="space-between"
//           rowGap="20px"
//           columnGap="1.33%"
//           sx={{
//             "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//           }}
//         >
//           {data && data.map(
//             ({
//               _id,
//               name,
//               description,
//               price,
//               rating,
//               category,
//               units,
//               stat,
//             }) => (
//               <Product
//                 key={_id}
//                 _id={_id}
//                 name={name}
//                 description={description}
//                 price={price}
//                 rating={rating}
//                 category={category}
//                 units={units}
//                 stat={stat}
//               />
//             )
//           )}
//         </Box>
//       ) : (
//         <>Loading...</>
//       )}
//     </Box>
//   );
// };

// export default Products;


import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  units,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          
          <Typography>Units Bought: {units}</Typography>
          <Typography>
            Yearly Profit This Year: {stat.yearlyProfit}
          </Typography>
          <Typography>
            Yearly Revenue This Year: {stat.yearlyTotalRevenue}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const dummyData = [
  {
    _id: "1",
    name: "TATA",
    description: "TATA is a multinational conglomerate company with operations in various sectors including automotive, steel, and IT services.",
    price: 10,
    rating: 4.5,
    category: "Automotive",
    units: 100,
    stat: {
      yearlyProfit: 5000,
      yearlyTotalRevenue: 200,
    },
  },
  {
    _id: "2",
    name: "Bajaj",
    description: "Bajaj Auto Limited is an Indian multinational two-wheeler and three-wheeler manufacturing company based in Pune, Maharashtra.",
    price: 20,
    rating: 4,
    category: "Automotive",
    units: 200,
    stat: {
      yearlyProfit: 8000,
      yearlyTotalRevenue: 400,
    },
  },
  {
    _id: "3",
    name: "Infosys",
    description: "Infosys is an Indian multinational corporation that provides business consulting, information technology, and outsourcing services.",
    price: 30,
    rating: 4.7,
    category: "Information Technology",
    units: 150,
    stat: {
      yearlyProfit: 10000,
      yearlyTotalRevenue: 600,
    },
  },
  {
    _id: "4",
    name: "Reliance",
    description: "Reliance Industries Limited is an Indian multinational conglomerate company headquartered in Mumbai, India.",
    price: 25,
    rating: 4.3,
    category: "Energy",
    units: 180,
    stat: {
      yearlyProfit: 7000,
      yearlyTotalRevenue: 500,
    },
  },
  {
    _id: "5",
    name: "Tesla",
    description: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
    price: 50,
    rating: 4.8,
    category: "Energy",
    units: 120,
    stat: {
      yearlyProfit: 15000,
      yearlyTotalRevenue: 800,
    },
  },
  {
    _id: "6",
    name: "Apple",
    description: "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
    price: 120,
    rating: 4.9,
    category: "Technology",
    units: 90,
    stat: {
      yearlyProfit: 20000,
      yearlyTotalRevenue: 1000,
    },
  },
  {
    _id: "7",
    name: "Amazon",
    description: "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    price: 1800,
    rating: 4.6,
    category: "Technology",
    units: 70,
    stat: {
      yearlyProfit: 25000,
      yearlyTotalRevenue: 1200,
    },
  },
  {
    _id: "8",
    name: "Microsoft",
    description: "Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    price: 250,
    rating: 4.5,
    category: "Technology",
    units: 110,
    stat: {
      yearlyProfit: 18000,
      yearlyTotalRevenue: 900,
    },
  },
  {
    _id: "9",
    name: "Alphabet",
    description: "Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California.",
    price: 2200,
    rating: 4.7,
    category: "Technology",
    units: 80,
    stat: {
      yearlyProfit: 22000,
      yearlyTotalRevenue: 1100,
    },
  },
  {
    _id: "10",
    name: "IBM",
    description: "International Business Machines Corporation is an American multinational technology and consulting company headquartered in Armonk, New York.",
    price: 140,
    rating: 4.4,
    category: "Technology",
    units: 100,
    stat: {
      yearlyProfit: 16000,
      yearlyTotalRevenue: 850,
    },
  },
  {
    _id: "11",
    name: "General Electric",
    description: "General Electric is an American multinational conglomerate incorporated in New York City and headquartered in Boston.",
    price: 35,
    rating: 4.2,
    category: "Energy",
    units: 150,
    stat: {
      yearlyProfit: 6000,
      yearlyTotalRevenue: 450,
    },
  },
  {
    _id: "12",
    name: "Siemens",
    description: "Siemens AG is a German multinational conglomerate company headquartered in Munich and the largest industrial manufacturing company in Europe with branch offices abroad.",
    price: 40,
    rating: 4.6,
    category: "Technology",
    units: 130,
    stat: {
      yearlyProfit: 8500,
      yearlyTotalRevenue: 550,
    },
  },
  {
    _id: "13",
    name: "Google",
    description: "Google is an American multinational technology company that specializes in Internet-related services and products.",
    price: 2000,
    rating: 4.8,
    category: "Technology",
    unit: 80,
    stat: {
      yearlyProfit: 23000,
      yearlyTotalRevenue: 1200,
    },
  },
  {
    _id: "14",
    name: "Facebook",
    description: "Facebook is an American online social media and social networking service company.",
    price: 350,
    rating: 4.6,
    category: "Technology",
    unit: 100,
    stat: {
      yearlyProfit: 18000,
      yearlyTotalRevenue: 900,
    },
  },
  {
    _id: "15",
    name: "Johnson & Johnson",
    description: "Johnson & Johnson is an American multinational corporation that develops medical devices, pharmaceutical, and consumer packaged goods.",
    price: 150,
    rating: 4.7,
    category: "Healthcare",
    unit: 120,
    stat: {
      yearlyProfit: 17000,
      yearlyTotalRevenue: 850,
    },
  },
  {
    _id: "16",
    name: "Pfizer",
    description: "Pfizer Inc. is an American multinational pharmaceutical corporation.",
    price: 120,
    rating: 4.5,
    category: "Healthcare",
    unit: 140,
    stat: {
      yearlyProfit: 16000,
      yearlyTotalRevenue: 800,
    },
  },
  {
    _id: "17",
    name: "Merck & Co.",
    description: "Merck & Co., Inc., d.b.a. Merck Sharp & Dohme outside the United States and Canada, is an American multinational pharmaceutical company.",
    price: 110,
    rating: 4.4,
    category: "Healthcare",
    unit: 130,
    stat: {
      yearlyProfit: 15000,
      yearlyTotalRevenue: 750,
    },
  },
  {
    _id: "18",
    name: "Coca-Cola",
    description: "The Coca-Cola Company is an American multinational corporation, and manufacturer, retailer, and marketer of nonalcoholic beverage concentrates and syrups.",
    price: 50,
    rating: 4.3,
    category: "Beverage",
    unit: 200,
    stat: {
      yearlyProfit: 12000,
      yearlyTotalRevenue: 600,
    },
  },
  {
    _id: "19",
    name: "Nestlé",
    description: "Nestlé S.A. is a Swiss multinational food and drink processing conglomerate corporation.",
    price: 80,
    rating: 4.2,
    category: "Food",
    unit: 180,
    stat: {
      yearlyProfit: 13000,
      yearlyTotalRevenue: 700,
    },
  },
  {
    _id: "20",
    name: "Procter & Gamble",
    description: "Procter & Gamble is an American multinational consumer goods corporation.",
    price: 90,
    rating: 4.1,
    category: "Consumer Goods",
    unit: 150,
    stat: {
      yearlyProfit: 14000,
      yearlyTotalRevenue: 650,
    },
  },
  {
    _id: "21",
    name: "Walmart",
    description: "Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores.",
    price: 100,
    rating: 4.0,
    category: "Retail",
    unit: 160,
    stat: {
      yearlyProfit: 15000,
      yearlyTotalRevenue: 800,
    },
  },
  {
    _id: "22",
    name: "Toyota",
    description: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan.",
    price: 70,
    rating: 4.5,
    category: "Automotive",
    unit: 170,
    stat: {
      yearlyProfit: 16000,
      yearlyTotalRevenue: 850,
    },
  },
  {
    _id: "23",
    name: "Samsung",
    description: "Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul.",
    price: 180,
    rating: 4.7,
    category: "Technology",
    unit: 90,
    stat: {
      yearlyProfit: 20000,
      yearlyTotalRevenue: 1000,
    },
  },
  {
    _id: "24",
    name: "Sony",
    description: "Sony Corporation is a Japanese multinational conglomerate corporation headquartered in Kōnan, Minato, Tokyo.",
    price: 160,
    rating: 4.6,
    category: "Technology",
    unit: 100,
    stat: {
      yearlyProfit: 19000,
      yearlyTotalRevenue: 950,
    },
  },
  // Add more entries if needed
];


const Products = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of all your stocks." />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {dummyData.map(
          ({
            _id,
            name,
            description,
            price,
            rating,
            category,
            units,
            stat,
          }) => (
            <Product
              key={_id}
              _id={_id}
              name={name}
              description={description}
              price={price}
              rating={rating}
              category={category}
              units={units}
              stat={stat}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default Products;
