import React from "react";
import "../../Answers/answer.css";

const ll = () => {
  return (
    <div className="div">
      <div className="ans_heading">
        <h1>Segregate even and odd nodes in a Linked List</h1>
      </div>

      <br></br>
      <div className="solution">
        <h1>Optimal Approach :</h1>
<p>We are making two lists (even and odd) and at the end connect them.</p>

        <h2>Code</h2>
        <h3>
          T.C:O(n)
          <br />
          S.C:O(1)
        </h3>
        <pre className="code">
          {`
Node* divide(int N, Node *head){
    
    Node *curr = head,*prev=0,*t=0;
    while(curr!=NULL)
    {
    if(curr->data%2==0)
        {
        int x = curr->data;
        Node *temp = new Node(x);
        temp->next=NULL;
            if(prev == 0)
                {
                    prev = temp;
                    t = temp;
                }
                else
                {
                    t->next = temp;
                    t = temp;
                }
        curr=curr->next;
        }
    else
        {
            curr=curr->next;
         }
    }


    Node *curr2 = head,*t2=0,*head2=0;
    while(curr2 != NULL)
    {
    if(curr2->data%2==1)
        {
            int y = curr2->data;
            Node *newnode = new Node(y);
            newnode->next = NULL;
                if(head2==0)
                {
                    head2 = newnode;
                    t2=newnode;
                }
                else
                {
                    t2->next = newnode;
                    t2=newnode;
                }
            curr2=curr2->next;
        }
    else
        {
        curr2=curr2->next;
        }
    }

    if(t!= 0)
    {
        t->next=head2;
        return prev;
    }

    return head2;

    }
 
`}
        </pre>
      </div>
    </div>
  );
};

export default ll;
