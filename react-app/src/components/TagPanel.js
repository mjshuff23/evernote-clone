import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles/TagPanelStyles';
import { Box, Divider, List, ListItem, ListItemText, ListSubheader, Slide, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/TagPanelStyles';
import { toggleTagPanel } from '../store/actions/ui';

const TagPanel = (props) => {
  const classes = useStyles();
  const tags = useSelector(state => state.tags);
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const sections = () => {
    let sectionMapping = new Map();
    ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].forEach(section => {
      let filteredIds = tags.ids.filter(tagid => {
        if (section === '#') {
          return tags.dict[tagid].title.match(/^[^a-z]/i);
        }
        return tags.dict[tagid].title.match(new RegExp(`^[${section}]`, 'i'));
      });
      if (filteredIds.length > 0) {
        sectionMapping[section] = filteredIds;
      }
    });
    return sectionMapping;
  };

  const hideTagPanel = e => {
    dispatch(toggleTagPanel());
  };

  if (Object.keys(ui).length === 0) return null;

  return (
    <Slide direction="right" in={ ui.display_tag_panel } mountOnEnter unmountOnExit onBlur={ hideTagPanel }>
      <Box className={ classes.tagPanel }>
        <Typography>Tags</Typography>
        <Divider />
        <List className={ classes.listroot } subheader={ <li /> }>
          { Object.keys(sections()).map((sectionId) => (
            <li key={ `section-${sectionId}` } className={ classes.listSection }>
              <ul className={ classes.ul }>
                <ListSubheader>{ sectionId }</ListSubheader>
                { sections()[sectionId].sort(function (tag1, tag2) {
                  if (tags.dict[tag1].title.toLowerCase() < tags.dict[tag2].title.toLowerCase()) return -1;
                  if (tags.dict[tag1].title.toLowerCase() > tags.dict[tag2].title.toLowerCase()) return 1;
                  return 0;
                }).map((item) => (
                  <ListItem key={ `item-${sectionId}-${item}` }>
                    <ListItemText primary={ `${tags.dict[item].title} (${tags.dict[item].note_ids.length})` } />
                  </ListItem>
                )) }
              </ul>
            </li>
          )) }
        </List>
      </Box>
    </Slide>
  );
};

export default TagPanel;
