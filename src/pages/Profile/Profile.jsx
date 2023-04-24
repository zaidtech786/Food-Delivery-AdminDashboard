import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { AppContext } from '../../Context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AuthContext';


const Profile = () => {
  const {admin} = useContext(AppContext)
//   const [userData,setUserData] = useState();
//   const navigate = useNavigate()
//   const getUserData = () => {
//     axios.get(`http://localhost:4000/api/getuser/${user._id}`)
//     .then(res => {
//       console.log(res.data.user)
//       setUserData(res.data.user)
//     }).catch(err => {
//       console.log(err)
//     })
//   }
//   useEffect( () => {
//     getUserData()
//   },[])
  return (
    <>
        {/* <Header />
          <Sidebar /> */}
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          marginLeft:"300px"
        }}
      >
        <Stack>
          <Typography fontSize="28px" fontWeight={600} color="#11142d" sx={{marginTop:"2rem"}}>
            My Profile
          </Typography>
        </Stack>
        <Box
          display="flex"
          sx={{
            flexDirection: { lg: "row", xs: "column" },
          }}
          gap={4}
        >
          <Box
            display="flex"
            bgcolor="#fcfcfc"
            height="27rem"
            borderRadius="15px"
            flexDirection="column"
            alignItems="center"
            padding="20px"
            mt="25px"
            sx={{
              "&:hover": {
                boxShadow: "0px 4px 16px rgba(0,0,0,.08)",
              },
              cursor: "pointer",
              width: { lg: "35%", xs: "100%" },
            }}
            gap={8}
          >
        
            <Avatar
              src=""
              sx={{
                cursor: "pointer",
                width: {
                  xs: 250,
                  md: 280,
                },
                height: {
                  xs: 250,
                  md: 280,
                },
              }}
              alt="userData?.name"
            />
            
            <Button
              variant="outlined"
              size="large"
              sx={{
                width: "20rem",
                height: "3rem",
                color: "#A555EC",
                borderColor: "#a555ec",
                "&:hover": {
                  borderColor: "#a555ec",
                },
                
              }}
            //   onClick={() => showEditDrawer()}
            >Edit Profile</Button>
          </Box>

          <Box
            display="flex"
            bgcolor="#fcfcfc"
            height="27rem"
            borderRadius="15px"
            padding="20px"
            mt="25px"
            width="100%"
            flexDirection="column"
            sx={{
              "&:hover": {
                boxShadow: "0px 4px 16px rgba(0,0,0,.08)",
              },
              cursor: "pointer",
            }}
            gap={4}
          >
            <Stack
              display="flex"
              width="100%"
              gap={1}
              flexDirection="row"
              height="fit-content"
            >
              
                
              <Typography fontSize="22px" fontWeight={600} color="#11142d">
                {admin.name}
              </Typography>
              
              {/* { user?.gender && 

              <Typography variant="caption" color="rgb(128, 129, 145)">
                ( {user.gender}
              </Typography>
              } */}
              <Typography variant="caption" color="rgb(128, 129, 145)">
                ( Male / Female )
              </Typography>
            </Stack>
            <Box
              sx={{
                flexDirection: { lg: "row", xs: "column" },
              }}
            >
              <Box
                display="flex"
                gap={2}
                flexDirection="row"
                alignItems="center"
              >
                <LocationOnIcon />
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                  Address
                </Typography>
              </Box>
              <Box mt={2}>
                
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia obcaecati voluptatem pariatur porro rerum. Eligendi
                  quis ipsa perspiciatis, perferendis, nobis recusandae impedit
                  nesciunt beatae corrupti sed non libero culpa laborum!
                </Typography>
              </Box>
            </Box>
            <Box
              display="felx"
              sx={{
                flexDirection: { lg: "row", xs: "column" },
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                 Phone Number
                </Typography>
                <Box mt={2} display="flex" flexDirection="row" gap={2}>
                  <PhoneIcon />
                  <Typography>{admin.phone}</Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" mt={6}>
                <Typography
                  fontSize="15px"
                  fontWeight={500}
                  color="rgb(128, 129, 145)"
                >
                  Email
                </Typography>
                <Box mt={2} display="flex" flexDirection="row" gap={2}>
                  <MailIcon />
                  {admin.email}

                  {/* <Typography>{userData?.email}</Typography> */}
                  
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Profile