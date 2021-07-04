import React from 'react'
import '../../Answers/answer.css';

const ll = () => {
    return (
    

<div className="div">

<div className="ans_heading">

    <h1 >Sort a “k”sorted Doubly Linked list</h1>
    </div>

    <br></br>
    <div className="solution">


<h1>Optimal Approach :</h1>

  

    <h2>Code</h2>
    <h2>Approach 1:</h2>
    <p>In this, we are checking curr and its prev </p>
    <p>If prev less than curr , swap it </p>
    <p>Do this till curr reaches end.</p>
    <p>Main point is to remember corner cases</p>

    <h3>
T.C:O(n*logk)<br/>
S.C:O(1)
</h3>
    <pre className="code">
        {

            `
struct Node* sortAKSortedDLL(struct Node* head, int k)
{ 
    if(!head || !head->next)
        return head;
  
   for(Node *i = head->next; i != NULL; i = i->next) {
        Node *j = i;
    while(j->prev != NULL && j->data < j->prev->data) {
            Node* temp = j->prev->prev;
            Node* temp2 = j->prev;
            Node *temp3 = j->next;
            j->prev->next = temp3;
            j->prev->prev = j;
            j->prev = temp;
            j->next = temp2;
            if(temp != NULL)
                temp->next = j;
            if(temp3 != NULL)
                temp3->prev = temp2;
        }
        if(j->prev == NULL)
            head = j;
    }
    return head;
}
            `
        }
    </pre>
    <h2>Approach 2:</h2>
    <p>We will use priority queue of length k</p>
    <p>First, push first k nodes in priority_queue</p>
<p>Then, take top of priority_queue, keep p and q pointers at head</p>
<p>If p and t are not same that means t is not head , so swap it with p</p>
<p>make p to next of t</p>
<p>Keep pushing nodes in queue till all traversed</p>
<p>Then , check similarly if p an d t are same , if not ,swap them.</p>

<h3>
T.C:O(n*logk)<br/>
S.C:O(k)
</h3>
<pre className="code">
{
`
struct cmp
{
    bool operator()(const pair<int,Node*>&p1,const pair<int,Node*>&p2)
    {
        return p1.first>p2.first;
    }
};
void swap(Node *p,Node *t)
{
    Node *p_prev=p->prev,*p_next=p->next;
    
    p->next=t->next; 
    
    if(t->next)
    t->next->prev=p;
    
    if(t->prev==p)
    {
        p->prev=t;
        t->next=p;
    }
    else if(t->prev)
    {
        p->prev=t->prev;
        t->prev->next=p;
    }    t->prev=p_prev;
    if(p_prev)p_prev->next=t;
    if(p_next!=t) 
    {
        t->next=p_next;
        if(p_next)p_next->prev=t;
    }
}
void Ksort(Node **head,int k)
{
    Node *p=*head,*q=*head;
    priority_queue<pair<int,Node*>,vector<pair<int,Node*>>,cmp>Q;
    for(int i=0;i<=k && q;i++)
    {
        Q.push({q->data,q});
        q=q->next;
    }
    while(q)
    {
        Node *t=Q.top().second;
        // cout<<"s "<<(*head)->data<<" "<<p->data<<" "<<t->data<<endl;
        Q.pop();
        if(p!=t)
        swap(p,t);
        if(p==*head)
        *head=t;
        p=t->next;
        Q.push({q->data,q});
        q=q->next;
    }
    while(p->next)
    {
        Node *t=Q.top().second;
        Q.pop();
        if(p!=t)
        swap(p,t);
        p=t->next;
    }
}
`
}
</pre>
</div>

  </div>
     
    )
}

export default ll
