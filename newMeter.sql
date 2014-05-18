CREATE TABLE meter2 (
m_id INT not null auto_increment primary key , 
m_value_count INT not null,
m_indicbef1 FLOAT ( 25 , 2 ),
m_user_ind1 FLOAT ( 25 , 2 ),
m_service INT not null, 
m_person INT not null, 
FOREIGN  KEY ( m_person ) REFERENCES person ( p_id )
ON UPDATE CASCADE 
ON DELETE CASCADE 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE meter RENAME TO meter3;
ALTER TABLE meter2 RENAME TO meter;

INSERT INTO meter (m_id , m_value_count, m_indicbef1, m_service, m_person) 
select m_id , m_value_count, m_indicbef1, m_service, m_person  
from meter3 ;

DROP TABLE meter3;