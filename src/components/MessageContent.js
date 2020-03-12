import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  Box
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";

const MessageContent = ({ msg }) => {
  return (
    <Card className="message" key={msg.id} variant="outlined">
      {msg.private === true ? (
        <Box p={1} className="private-message">
          <Lock fontSize="small" />
          Message privé
        </Box>
      ) : (
        <Box className="public-message" p={1}>
          Message public
        </Box>
      )}
      <CardHeader avatar={<Avatar />} title={msg.author} subheader={msg.date} />
      <CardContent>
        <Typography>{msg.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default MessageContent;
