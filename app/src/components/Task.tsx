import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Checkbox,
  Grid,
  TextField,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateTask, deleteTask } from '../services/api';
import Task from '../models/task';
import '../styles/Task.css';

interface TaskProps {
  task: Task;
  onDelete: (id: number) => void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, onDelete }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [expanded, setExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.status === 'completed');
  const [originalTitle, setOriginalTitle] = useState(task.title);
  const [originalDescription, setOriginalDescription] = useState(task.description);

  const cardRef = useRef<HTMLDivElement>(null);
  const textFieldRefs = useRef<{ title: HTMLInputElement | null; description: HTMLInputElement | null }>({
    title: null,
    description: null,
  });

  const handleToggle = async () => {
    setIsCompleted((prev) => !prev);

    try {
      await updateTask(task.id, {
        status: isCompleted ? 'pending' : 'completed',
      });
    } catch (error) {
      setIsCompleted(isCompleted);
    }
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete(task.id);
  };

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handleSave = async () => {
    const updatedTask = await updateTask(task.id, { title, description });
    console.log(updatedTask);
    setOriginalTitle(title);
    setOriginalDescription(description);
  };

  const isChanged = () => {
    return title !== originalTitle || description !== originalDescription;
  };

  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if click is inside card and not on interactive elements
    if (cardRef.current && cardRef.current.contains(e.target as Node)) {
      if (
        !textFieldRefs.current.title?.contains(e.target as Node) &&
        !textFieldRefs.current.description?.contains(e.target as Node) &&
        !e.target.closest('button') &&
        !e.target.closest('input[type="checkbox"]')
      ) {
        handleExpand(); // Toggle expanded state
      }
    }
  };

  const handleTextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCompleted) {
      e.stopPropagation(); // Prevent the event from bubbling up to the card click handler
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCardClick);
    return () => {
      document.removeEventListener('mousedown', handleCardClick);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`task ${expanded ? 'expanded' : ''} ${isCompleted ? 'completed' : ''}`}
    >
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <Checkbox
              checked={isCompleted}
              onChange={handleToggle}
              color="primary"
            />
          </Grid>
          <Grid item xs={3}>
            {expanded && !isCompleted ? (
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                fullWidth
                InputProps={{
                  style: {
                    border: 'none',
                    boxShadow: 'none',
                  },
                }}
                inputRef={(ref) => textFieldRefs.current.title = ref}
              />
            ) : (
              <Typography
                variant="h6"
                component="div"
                className={`task-title ${isCompleted ? 'completed' : ''}`}
                onClick={!isCompleted ? handleExpand : handleTextClick}
                style={{ cursor: 'pointer' }}
              >
                {title}
              </Typography>
            )}
          </Grid>
          <Grid item xs={5}>
            {expanded && !isCompleted ? (
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                fullWidth
                multiline
                InputProps={{
                  style: {
                    border: 'none',
                    boxShadow: 'none',
                  },
                }}
                inputRef={(ref) => textFieldRefs.current.description = ref}
              />
            ) : (
              <Typography
                variant="body1"
                color="textSecondary"
                className={`task-description ${expanded ? 'expanded' : ''} ${
                  isCompleted ? 'completed' : ''
                }`}
                onClick={!isCompleted ? handleExpand : handleTextClick}
                style={{ cursor: 'pointer' }}
              >
                {description}
              </Typography>
            )}
            {expanded && (
              <Typography
                variant="body2"
                color="textSecondary"
                className="task-created-date"
              >
                {`Created on: ${formatDateTime(new Date(task.createdDate))}`}
              </Typography>
            )}
          </Grid>
          <Grid item xs={2} container direction="column" alignItems="flex-end">
            {expanded && !isCompleted && (
              <IconButton onClick={handleSave} disabled={!isChanged()}>
                <SaveIcon />
              </IconButton>
            )}
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TaskComponent;
