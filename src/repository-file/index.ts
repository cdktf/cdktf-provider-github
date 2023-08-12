// https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The branch name, defaults to the repository's default branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#branch RepositoryFile#branch}
  */
  readonly branch?: string;
  /**
  * The commit author name, defaults to the authenticated user's name. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}
  */
  readonly commitAuthor?: string;
  /**
  * The commit author email address, defaults to the authenticated user's email address. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}
  */
  readonly commitEmail?: string;
  /**
  * The commit message when creating, updating or deleting the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * The file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#content RepositoryFile#content}
  */
  readonly content: string;
  /**
  * The file path to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#file RepositoryFile#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#id RepositoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable overwriting existing files, defaults to "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}
  */
  readonly overwriteOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file#repository RepositoryFile#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file github_repository_file}
*/
export class RepositoryFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/5.33.0/docs/resources/repository_file github_repository_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'github_repository_file',
      terraformGeneratorMetadata: {
        providerName: 'github',
        providerVersion: '5.33.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._commitAuthor = config.commitAuthor;
    this._commitEmail = config.commitEmail;
    this._commitMessage = config.commitMessage;
    this._content = config.content;
    this._file = config.file;
    this._id = config.id;
    this._overwriteOnCreate = config.overwriteOnCreate;
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
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit_author - computed: false, optional: true, required: false
  private _commitAuthor?: string; 
  public get commitAuthor() {
    return this.getStringAttribute('commit_author');
  }
  public set commitAuthor(value: string) {
    this._commitAuthor = value;
  }
  public resetCommitAuthor() {
    this._commitAuthor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitAuthorInput() {
    return this._commitAuthor;
  }

  // commit_email - computed: false, optional: true, required: false
  private _commitEmail?: string; 
  public get commitEmail() {
    return this.getStringAttribute('commit_email');
  }
  public set commitEmail(value: string) {
    this._commitEmail = value;
  }
  public resetCommitEmail() {
    this._commitEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitEmailInput() {
    return this._commitEmail;
  }

  // commit_message - computed: true, optional: true, required: false
  private _commitMessage?: string; 
  public get commitMessage() {
    return this.getStringAttribute('commit_message');
  }
  public set commitMessage(value: string) {
    this._commitMessage = value;
  }
  public resetCommitMessage() {
    this._commitMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitMessageInput() {
    return this._commitMessage;
  }

  // commit_sha - computed: true, optional: false, required: false
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // overwrite_on_create - computed: false, optional: true, required: false
  private _overwriteOnCreate?: boolean | cdktf.IResolvable; 
  public get overwriteOnCreate() {
    return this.getBooleanAttribute('overwrite_on_create');
  }
  public set overwriteOnCreate(value: boolean | cdktf.IResolvable) {
    this._overwriteOnCreate = value;
  }
  public resetOverwriteOnCreate() {
    this._overwriteOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteOnCreateInput() {
    return this._overwriteOnCreate;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
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
      commit_author: cdktf.stringToTerraform(this._commitAuthor),
      commit_email: cdktf.stringToTerraform(this._commitEmail),
      commit_message: cdktf.stringToTerraform(this._commitMessage),
      content: cdktf.stringToTerraform(this._content),
      file: cdktf.stringToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      overwrite_on_create: cdktf.booleanToTerraform(this._overwriteOnCreate),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }
}
