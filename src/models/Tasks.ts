import oracledb from "oracledb";
import Log from "../middlewares/Log";

class Tasks {
	public async task1(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT P.PLAYERS, C.CLUB
					FROM (  SELECT COUNT(PLAYERID) PLAYERS, INDEXID
        			FROM USER2.PLAYER
        			GROUP BY INDEXID) P
					INNER JOIN USER2.CLUB C
					ON P.INDEXID = C.CLUBID`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
	public async task2(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT COUNT(PLAYERID), PREFEREDFOOT 
					FROM PLAYERCHARACTERISTICS 
					WHERE PLAYERID IN ( SELECT PLAYERID 
                    FROM PLAYER 
                    WHERE INDEXID = (SELECT CLUBID 
                                    FROM CLUB 
                                    WHERE CLUB = 'Juventus'))
					GROUP BY PREFEREDFOOT`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
	public async task3(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT P.AGES, C.CLUB
					FROM CLUB C
					INNER JOIN( SELECT ROUND(AVG(AGE))AGES,INDEXID
            		FROM PLAYER
            		GROUP BY INDEXID) P
					ON P.INDEXID = C.CLUBID`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
	public async task4(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT P.PLAYERS, POS.POSITION
					FROM    (SELECT COUNT(INDEXID) PLAYERS, INDEXID FROM
       				PLAYER 
        			WHERE INDEXID = (SELECT CLUBID 
                        FROM CLUB
                        WHERE CLUB = 'Atlético Madrid')
        			GROUP BY INDEXID) P
					INNER JOIN POSITION POS
					ON POS.POSITIONID = P.INDEXID`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
	public async task5(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT PLAYERNAME FROM PLAYER
					WHERE INDEXID = ( SELECT NATIONALITYID 
                        FROM NATIONALITY 
                        WHERE NATIONALITY = 'France')
					AND AGE < 28
					AND ROWNUM < = 5`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
	public async task10(fetch: (err, data) => void): Promise<any> {
		return await oracledb.getConnection(
			(err, connection: oracledb.connection) => {
				if (err) {
					Log.error(err);
				}

				return connection.execute(
					`SELECT P.PLAYERNAME, HEIGHT, JUMPING
					FROM   (SELECT PC.PLAYERID ID , PC.HEIGHT HEIGHT , PS.JUMPING JUMPING
        				FROM PLAYERCHARACTERISTICS PC
        				INNER JOIN PLAYERSKILLS PS
        				ON PC.PLAYERID = PS.PLAYERID
        				WHERE PC.HEIGHT IS NOT NULL
        				AND PS.JUMPING IS NOT NULL
        				ORDER BY PC.HEIGHT DESC, PS.JUMPING ASC) PS
					INNER JOIN PLAYER P
					ON P.PLAYERID = PS.ID`,
					(err, al) => {
						if (err) {
							Log.warn(err);
						}

						connection.close();
						fetch(err, al);
					}
				);
			}
		);
	}
}

export default new Tasks();
