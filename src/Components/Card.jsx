

function Card({ users }) {
    console.log("Card",users);
    return (
        <div>
            {
                users.map((e) => {
                  return   (<p>
                        {e.login}
                    </p>)
                })
               }
        </div>
    );
}

export default Card;