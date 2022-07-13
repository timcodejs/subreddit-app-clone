import React, { useState } from 'react';
import { Button } from '../../styles/buttonStyled';
import { FormContainer, Label, Input } from '../../styles/formstyled';
import { OnSearchProps } from '../../types/formType';

const Form = ({ onSearch }: OnSearchProps) => {
  const [subreddit, setSubreddit] = useState('javascript');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(subreddit);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <Label>
        r /
        <Input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSubreddit(event.target.value)}
        />
      </Label>

      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

export default Form;
