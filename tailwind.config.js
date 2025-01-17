import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{

        "primary":"#003540",
        "secondary" : "#666666",
        "hover":"#295F70"
        ,"card":"#EAF5F6"
      },
      fontFamily: {
      cairo: "Cairo, serif" ,
      mons:"Montserrat, serif"

    
    
    
    },
      
    },
  },
  plugins: [],
});