# `github_repository_file`

Refer to the Terraform Registory for docs: [`github_repository_file`](https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file).

# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-github.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-github.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file github_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_file.RepositoryFile;

RepositoryFile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .content(java.lang.String)
    .file(java.lang.String)
    .repository(java.lang.String)
//  .branch(java.lang.String)
//  .commitAuthor(java.lang.String)
//  .commitEmail(java.lang.String)
//  .commitMessage(java.lang.String)
//  .id(java.lang.String)
//  .overwriteOnCreate(java.lang.Boolean)
//  .overwriteOnCreate(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.file">file</a></code> | <code>java.lang.String</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitAuthor">commitAuthor</a></code> | <code>java.lang.String</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitEmail">commitEmail</a></code> | <code>java.lang.String</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable overwriting existing files, defaults to "false". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.content"></a>

- *Type:* java.lang.String

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.file"></a>

- *Type:* java.lang.String

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#file RepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `commitAuthor`<sup>Optional</sup> <a name="commitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitAuthor"></a>

- *Type:* java.lang.String

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `commitEmail`<sup>Optional</sup> <a name="commitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitEmail"></a>

- *Type:* java.lang.String

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.commitMessage"></a>

- *Type:* java.lang.String

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.overwriteOnCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor">resetCommitAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail">resetCommitEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate">resetOverwriteOnCreate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCommitAuthor` <a name="resetCommitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor"></a>

```java
public void resetCommitAuthor()
```

##### `resetCommitEmail` <a name="resetCommitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail"></a>

```java
public void resetCommitEmail()
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```java
public void resetCommitMessage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetId"></a>

```java
public void resetId()
```

##### `resetOverwriteOnCreate` <a name="resetOverwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```java
public void resetOverwriteOnCreate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_file.RepositoryFile;

RepositoryFile.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_file.RepositoryFile;

RepositoryFile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_file.RepositoryFile;

RepositoryFile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha">sha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput">commitAuthorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput">commitEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput">commitMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwriteOnCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor">commitAuthor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail">commitEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha"></a>

```java
public java.lang.String getSha();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commitAuthorInput`<sup>Optional</sup> <a name="commitAuthorInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput"></a>

```java
public java.lang.String getCommitAuthorInput();
```

- *Type:* java.lang.String

---

##### `commitEmailInput`<sup>Optional</sup> <a name="commitEmailInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput"></a>

```java
public java.lang.String getCommitEmailInput();
```

- *Type:* java.lang.String

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```java
public java.lang.String getCommitMessageInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `overwriteOnCreateInput`<sup>Optional</sup> <a name="overwriteOnCreateInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```java
public java.lang.Object getOverwriteOnCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commitAuthor`<sup>Required</sup> <a name="commitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor"></a>

```java
public java.lang.String getCommitAuthor();
```

- *Type:* java.lang.String

---

##### `commitEmail`<sup>Required</sup> <a name="commitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail"></a>

```java
public java.lang.String getCommitEmail();
```

- *Type:* java.lang.String

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `overwriteOnCreate`<sup>Required</sup> <a name="overwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```java
public java.lang.Object getOverwriteOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.github.repository_file.RepositoryFileConfig;

RepositoryFileConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .content(java.lang.String)
    .file(java.lang.String)
    .repository(java.lang.String)
//  .branch(java.lang.String)
//  .commitAuthor(java.lang.String)
//  .commitEmail(java.lang.String)
//  .commitMessage(java.lang.String)
//  .id(java.lang.String)
//  .overwriteOnCreate(java.lang.Boolean)
//  .overwriteOnCreate(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>java.lang.String</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file">file</a></code> | <code>java.lang.String</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor">commitAuthor</a></code> | <code>java.lang.String</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail">commitEmail</a></code> | <code>java.lang.String</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable overwriting existing files, defaults to "false". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#file RepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `commitAuthor`<sup>Optional</sup> <a name="commitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor"></a>

```java
public java.lang.String getCommitAuthor();
```

- *Type:* java.lang.String

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `commitEmail`<sup>Optional</sup> <a name="commitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail"></a>

```java
public java.lang.String getCommitEmail();
```

- *Type:* java.lang.String

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```java
public java.lang.Object getOverwriteOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---



