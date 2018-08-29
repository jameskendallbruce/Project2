USE food_db;

INSERT INTO users(first_name, last_name, email, address, state, city,zip) VALUES
    ('Yadhap', 'Dahal', 'yadhapdahal@gmail.com', '125 Huff Drive', 'GA', 'Lawrenceville', 30044),
    ('Micheal ', 'Johnson', 'micheal_johnson@gmail.com', '225 Oak Creek  Drive', 'GA', 'Atlatna', 30096),
    ('Brittany', 'Simpson', 'brittany_simpson@gmail.com', '3425  Peachtree rd', 'GA', 'Atlanta', 30360),
    ('Thomas', 'Dahl', 'thomas123@gmail.com', '4567 Buford hwy', 'GA', 'Atlanta', 30043),
    ('Don', 'Carter', 'doncarter@yahoo.com', '1254 Blueberry ln', 'GA', 'Atlatna', 30090),
    ('Alan', 'Simpson', 'alansimpson@gmail.com', '9087 Trellipe Drive', 'GA', 'Atlatna', 30012),
    ('Benjamin', 'Dilagado', 'Ben_12@rocketmail.com', '1000 Delta Blvd', 'GA', 'Atlatna', 30044),
    ('Robert', 'Langdon', 'robert@gmail.com', '9080 winters chapal rd', 'GA', 'Atlatna', 30360);
                                                                                                                                    

INSERT INTO food_listings(food_name, food_type, food_description, price, image_url, user_id, delivery) VALUES
    ('Garlic Soya Chicken', 'Chinese', 'A gorgeous appetizer made with button mushrooms, onions, soya sauce, cashew nuts and a host of other sauce and spices', '12.99', 'https://www.ndtv.com/cooks/images/mushroom-cashewnuts-new.jpg', 1, false),
    ('Cantonese Chicken Soup', 'Chinese', 'An authentic Chinese soup, the Cantonese Soup is a hearty mix of chicken and vegetables chopped into small pieces in piping hot chicken stock.', '12.49', 'https://images-gmi-pmc.edge-generalmills.com/7caedac9-d3ed-44ff-a3eb-860e0f36cedd.jpg', 2, true),
    ('Hollandaise Sauce', 'French', 'creamy sauce made from an emulsion of egg yolk is an absolute essential for Eggs Benedict. It also goes beautifully with fresh steamed asparagus or other spring vegetables.', 13.99, 'https://images.anovaculinary.com/sous-vide-salmon-with-hollandaise-sauce/header/sous-vide-salmon-with-hollandaise-sauce-header-og.jpg', 3, true),
    ('Lobster Thermidor','French', 'A classic French dish where the lobster shell is stuffed with a creamy mixture of meat, egg yolks and brandy. Top up with cheese and bake for an oven-browned cheese crust', 19.99, 'https://www.ndtv.com/cooks/images/Lobster-Thermidor-1100x800.jpg',3, true);                                        
                                                
            
SELECT * FROM users;
SELECT * FROM food_listings;
    



Collapse 

Message Input


Message Jake Cooper, Lauren Brown, Yadhap Dahal