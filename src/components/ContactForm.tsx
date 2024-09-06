import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");
 const [status, setStatus] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Handle form submission here
  setStatus("Thank you for your message. I'll get back to you soon.");
 };

 return (
  <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
   <Typography variant="h6">Contact Me</Typography>
   <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
   <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
   <TextField label="Subject" variant="outlined" value={subject} onChange={(e) => setSubject(e.target.value)} />
   <TextField label="Message" variant="outlined" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} required />
   <Button type="submit" variant="contained" color="primary">
    Send
   </Button>
   {status && <Typography>{status}</Typography>}
  </Box>
 );
};

export default ContactForm;
