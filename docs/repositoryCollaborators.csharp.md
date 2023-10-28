# `github_repository_collaborators`

Refer to the Terraform Registory for docs: [`github_repository_collaborators`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators).

# `repositoryCollaborators` Submodule <a name="`repositoryCollaborators` Submodule" id="@cdktf/provider-github.repositoryCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCollaborators <a name="RepositoryCollaborators" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators github_repository_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaborators(Construct Scope, string Id, RepositoryCollaboratorsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig">RepositoryCollaboratorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig">RepositoryCollaboratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam">PutTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam">ResetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTeam` <a name="PutTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam"></a>

```csharp
private void PutTeam(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam.parameter.value"></a>

- *Type:* object

---

##### `PutUser` <a name="PutUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser"></a>

```csharp
private void PutUser(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTeam` <a name="ResetTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam"></a>

```csharp
private void ResetTeam()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser"></a>

```csharp
private void ResetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryCollaborators.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryCollaborators.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryCollaborators.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryCollaborators.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryCollaborators to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryCollaborators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryCollaborators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds">InvitationIds</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team">Team</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user">User</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput">TeamInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput">UserInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `InvitationIds`<sup>Required</sup> <a name="InvitationIds" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds"></a>

```csharp
public StringMap InvitationIds { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team"></a>

```csharp
public RepositoryCollaboratorsTeamList Team { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user"></a>

```csharp
public RepositoryCollaboratorsUserList User { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput"></a>

```csharp
public object TeamInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput"></a>

```csharp
public object UserInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCollaboratorsConfig <a name="RepositoryCollaboratorsConfig" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Repository,
    string Id = null,
    object Team = null,
    object User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team">Team</a></code> | <code>object</code> | team block. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user">User</a></code> | <code>object</code> | user block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Team`<sup>Optional</sup> <a name="Team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team"></a>

```csharp
public object Team { get; set; }
```

- *Type:* object

team block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user"></a>

```csharp
public object User { get; set; }
```

- *Type:* object

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}

---

### RepositoryCollaboratorsTeam <a name="RepositoryCollaboratorsTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsTeam {
    string TeamId,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId">TeamId</a></code> | <code>string</code> | Team ID or slug to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Team ID or slug to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

### RepositoryCollaboratorsUser <a name="RepositoryCollaboratorsUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsUser {
    string Username,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username">Username</a></code> | <code>string</code> | (Required) The user to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

(Required) The user to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#username RepositoryCollaborators#username}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryCollaboratorsTeamList <a name="RepositoryCollaboratorsTeamList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsTeamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get"></a>

```csharp
private RepositoryCollaboratorsTeamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryCollaboratorsTeamOutputReference <a name="RepositoryCollaboratorsTeamOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsTeamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryCollaboratorsUserList <a name="RepositoryCollaboratorsUserList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsUserList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get"></a>

```csharp
private RepositoryCollaboratorsUserOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryCollaboratorsUserOutputReference <a name="RepositoryCollaboratorsUserOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryCollaboratorsUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



