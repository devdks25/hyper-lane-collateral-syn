use color_eyre::Result;
use structopt::StructOpt;

mod commands;
mod inboxes;
mod rpc;
mod subcommands;

use commands::Commands;

#[tokio::main]
async fn main() -> Result<()> {
    let command = Commands::from_args();

    match command {
        Commands::Prove(prove) => prove.run().await,
    }
}