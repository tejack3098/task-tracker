import React, { useState } from 'react';
import { Modal, Box, TextField, IconButton, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon
import { createTask } from '../services/api';
import Task from '../models/task';
import '../styles/TaskModal.css'; // Import CSS file

interface TaskModalProps {
  open: boolean;
  handleClose: () => void;
  onAdd: (task: Task) => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ open, handleClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = await createTask({ title, description });
    onAdd(newTask);
    setTitle('');
    setDescription('');
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="task-modal">
        <IconButton
          className="close-button"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography className="modal-title">Create Task</Typography>
        <form onSubmit={handleSubmit} className="form-fields">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Add Task
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default TaskModal;
