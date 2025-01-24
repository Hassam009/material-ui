import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Inbox, Drafts } from "@mui/icons-material";

const MyCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for Dialog

  // Handlers for Modal
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  // Handlers for Dialog
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1964&auto=format&fit=crop"
          alt="Sample Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Material-UI Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is an example of a Material-UI Card component. It combines
            images, text, and actions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Button size="small" color="secondary">
            Share
          </Button>
        </CardActions>
      </Card>

      <Container>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>

        {/* Modal Section */}
        <div>
          <Button onClick={handleModalOpen} variant="contained" sx={{ mt: 2 }}>
            Open Modal
          </Button>
          <Modal open={isModalOpen} onClose={handleModalClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                p: 4,
                boxShadow: 24,
                borderRadius: 1,
              }}
            >
              <Typography variant="h6" component="h2">
                Modal Title
              </Typography>
              <Typography sx={{ mt: 2 }}>
                This is a basic modal example.
              </Typography>
              <Button
                onClick={handleModalClose}
                sx={{ mt: 2 }}
                variant="outlined"
              >
                Close
              </Button>
            </Box>
          </Modal>
        </div>

        {/* Dialog Section */}
        <div>
          <Button onClick={handleDialogOpen} variant="contained" sx={{ mt: 2 }}>
            Open Dialog
          </Button>
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogContent>
              <Typography>This is a basic dialog example.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDialogClose} color="secondary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    </>
  );
};

export default MyCard;
