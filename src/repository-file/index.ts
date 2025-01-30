// https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically create the branch if it could not be found. Subsequent reads if the branch is deleted will occur from 'autocreate_branch_source_branch'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#autocreate_branch RepositoryFile#autocreate_branch}
  */
  readonly autocreateBranch?: boolean | cdktf.IResolvable;
  /**
  * The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#autocreate_branch_source_branch RepositoryFile#autocreate_branch_source_branch}
  */
  readonly autocreateBranchSourceBranch?: string;
  /**
  * The commit hash to start from, if 'autocreate_branch' is set. Defaults to the tip of 'autocreate_branch_source_branch'. If provided, 'autocreate_branch_source_branch' is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#autocreate_branch_source_sha RepositoryFile#autocreate_branch_source_sha}
  */
  readonly autocreateBranchSourceSha?: string;
  /**
  * The branch name, defaults to the repository's default branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#branch RepositoryFile#branch}
  */
  readonly branch?: string;
  /**
  * The commit author name, defaults to the authenticated user's name. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}
  */
  readonly commitAuthor?: string;
  /**
  * The commit author email address, defaults to the authenticated user's email address. GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}
  */
  readonly commitEmail?: string;
  /**
  * The commit message when creating, updating or deleting the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}
  */
  readonly commitMessage?: string;
  /**
  * The file's content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#content RepositoryFile#content}
  */
  readonly content: string;
  /**
  * The file path to manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#file RepositoryFile#file}
  */
  readonly file: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#id RepositoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable overwriting existing files, defaults to "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}
  */
  readonly overwriteOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The repository name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#repository RepositoryFile#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file github_repository_file}
*/
export class RepositoryFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "github_repository_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryFile to import
  * @param importFromId The id of the existing RepositoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.5.0/docs/resources/repository_file github_repository_file} Resource
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
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autocreateBranch = config.autocreateBranch;
    this._autocreateBranchSourceBranch = config.autocreateBranchSourceBranch;
    this._autocreateBranchSourceSha = config.autocreateBranchSourceSha;
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

  // autocreate_branch - computed: false, optional: true, required: false
  private _autocreateBranch?: boolean | cdktf.IResolvable; 
  public get autocreateBranch() {
    return this.getBooleanAttribute('autocreate_branch');
  }
  public set autocreateBranch(value: boolean | cdktf.IResolvable) {
    this._autocreateBranch = value;
  }
  public resetAutocreateBranch() {
    this._autocreateBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocreateBranchInput() {
    return this._autocreateBranch;
  }

  // autocreate_branch_source_branch - computed: false, optional: true, required: false
  private _autocreateBranchSourceBranch?: string; 
  public get autocreateBranchSourceBranch() {
    return this.getStringAttribute('autocreate_branch_source_branch');
  }
  public set autocreateBranchSourceBranch(value: string) {
    this._autocreateBranchSourceBranch = value;
  }
  public resetAutocreateBranchSourceBranch() {
    this._autocreateBranchSourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocreateBranchSourceBranchInput() {
    return this._autocreateBranchSourceBranch;
  }

  // autocreate_branch_source_sha - computed: true, optional: true, required: false
  private _autocreateBranchSourceSha?: string; 
  public get autocreateBranchSourceSha() {
    return this.getStringAttribute('autocreate_branch_source_sha');
  }
  public set autocreateBranchSourceSha(value: string) {
    this._autocreateBranchSourceSha = value;
  }
  public resetAutocreateBranchSourceSha() {
    this._autocreateBranchSourceSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocreateBranchSourceShaInput() {
    return this._autocreateBranchSourceSha;
  }

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
      autocreate_branch: cdktf.booleanToTerraform(this._autocreateBranch),
      autocreate_branch_source_branch: cdktf.stringToTerraform(this._autocreateBranchSourceBranch),
      autocreate_branch_source_sha: cdktf.stringToTerraform(this._autocreateBranchSourceSha),
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autocreate_branch: {
        value: cdktf.booleanToHclTerraform(this._autocreateBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autocreate_branch_source_branch: {
        value: cdktf.stringToHclTerraform(this._autocreateBranchSourceBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autocreate_branch_source_sha: {
        value: cdktf.stringToHclTerraform(this._autocreateBranchSourceSha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_author: {
        value: cdktf.stringToHclTerraform(this._commitAuthor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_email: {
        value: cdktf.stringToHclTerraform(this._commitEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_message: {
        value: cdktf.stringToHclTerraform(this._commitMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_on_create: {
        value: cdktf.booleanToHclTerraform(this._overwriteOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
