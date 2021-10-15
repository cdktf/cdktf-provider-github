// https://www.terraform.io/docs/providers/github/d/repository_file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch name, defaults to "main"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_file.html#branch DataGithubRepositoryFile#branch}
  */
  readonly branch?: string;
  /**
  * The file path to manage
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_file.html#file DataGithubRepositoryFile#file}
  */
  readonly file: string;
  /**
  * The repository name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository_file.html#repository DataGithubRepositoryFile#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository_file.html github_repository_file}
*/
export class DataGithubRepositoryFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository_file.html github_repository_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._file = config.file;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string;
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string ) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // commit_author - computed: true, optional: false, required: false
  public get commitAuthor() {
    return this.getStringAttribute('commit_author');
  }

  // commit_email - computed: true, optional: false, required: false
  public get commitEmail() {
    return this.getStringAttribute('commit_email');
  }

  // commit_message - computed: true, optional: false, required: false
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }

  // commit_sha - computed: true, optional: false, required: false
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // file - computed: false, optional: false, required: true
  private _file: string;
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      file: cdktf.stringToTerraform(this._file),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
