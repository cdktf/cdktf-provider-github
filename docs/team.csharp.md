# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-github.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-github.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.team.Team.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new Team(Construct Scope, string Id, TeamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.team.Team.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.team.Team.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.team.Team.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.team.Team.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.team.Team.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.team.Team.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.team.Team.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer">ResetCreateDefaultMaintainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetLdapDn">ResetLdapDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamId">ResetParentTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadId">ResetParentTeamReadId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadSlug">ResetParentTeamReadSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetPrivacy">ResetPrivacy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.team.Team.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.team.Team.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.team.Team.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.team.Team.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.team.Team.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.team.Team.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.team.Team.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.team.Team.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.team.Team.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.team.Team.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.team.Team.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.team.Team.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.Team.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.team.Team.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.team.Team.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.team.Team.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.team.Team.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreateDefaultMaintainer` <a name="ResetCreateDefaultMaintainer" id="@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer"></a>

```csharp
private void ResetCreateDefaultMaintainer()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.team.Team.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.team.Team.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLdapDn` <a name="ResetLdapDn" id="@cdktf/provider-github.team.Team.resetLdapDn"></a>

```csharp
private void ResetLdapDn()
```

##### `ResetParentTeamId` <a name="ResetParentTeamId" id="@cdktf/provider-github.team.Team.resetParentTeamId"></a>

```csharp
private void ResetParentTeamId()
```

##### `ResetParentTeamReadId` <a name="ResetParentTeamReadId" id="@cdktf/provider-github.team.Team.resetParentTeamReadId"></a>

```csharp
private void ResetParentTeamReadId()
```

##### `ResetParentTeamReadSlug` <a name="ResetParentTeamReadSlug" id="@cdktf/provider-github.team.Team.resetParentTeamReadSlug"></a>

```csharp
private void ResetParentTeamReadSlug()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-github.team.Team.resetPrivacy"></a>

```csharp
private void ResetPrivacy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.team.Team.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Team.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.team.Team.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.team.Team.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Team.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.team.Team.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Team.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.team.Team.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Team.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Team to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.team.Team.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.membersCount">MembersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput">CreateDefaultMaintainerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDnInput">LdapDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamIdInput">ParentTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadIdInput">ParentTeamReadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput">ParentTeamReadSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacyInput">PrivacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainer">CreateDefaultMaintainer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDn">LdapDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamId">ParentTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadId">ParentTeamReadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlug">ParentTeamReadSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacy">Privacy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.team.Team.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.team.Team.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.team.Team.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.team.Team.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.team.Team.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.team.Team.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.team.Team.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.team.Team.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.team.Team.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.team.Team.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.team.Team.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.Team.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.team.Team.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.team.Team.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MembersCount`<sup>Required</sup> <a name="MembersCount" id="@cdktf/provider-github.team.Team.property.membersCount"></a>

```csharp
public double MembersCount { get; }
```

- *Type:* double

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.team.Team.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-github.team.Team.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `CreateDefaultMaintainerInput`<sup>Optional</sup> <a name="CreateDefaultMaintainerInput" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput"></a>

```csharp
public object CreateDefaultMaintainerInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.team.Team.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.team.Team.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LdapDnInput`<sup>Optional</sup> <a name="LdapDnInput" id="@cdktf/provider-github.team.Team.property.ldapDnInput"></a>

```csharp
public string LdapDnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.team.Team.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentTeamIdInput`<sup>Optional</sup> <a name="ParentTeamIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamIdInput"></a>

```csharp
public string ParentTeamIdInput { get; }
```

- *Type:* string

---

##### `ParentTeamReadIdInput`<sup>Optional</sup> <a name="ParentTeamReadIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadIdInput"></a>

```csharp
public string ParentTeamReadIdInput { get; }
```

- *Type:* string

---

##### `ParentTeamReadSlugInput`<sup>Optional</sup> <a name="ParentTeamReadSlugInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput"></a>

```csharp
public string ParentTeamReadSlugInput { get; }
```

- *Type:* string

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-github.team.Team.property.privacyInput"></a>

```csharp
public string PrivacyInput { get; }
```

- *Type:* string

---

##### `CreateDefaultMaintainer`<sup>Required</sup> <a name="CreateDefaultMaintainer" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainer"></a>

```csharp
public object CreateDefaultMaintainer { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.team.Team.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.team.Team.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LdapDn`<sup>Required</sup> <a name="LdapDn" id="@cdktf/provider-github.team.Team.property.ldapDn"></a>

```csharp
public string LdapDn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.team.Team.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentTeamId`<sup>Required</sup> <a name="ParentTeamId" id="@cdktf/provider-github.team.Team.property.parentTeamId"></a>

```csharp
public string ParentTeamId { get; }
```

- *Type:* string

---

##### `ParentTeamReadId`<sup>Required</sup> <a name="ParentTeamReadId" id="@cdktf/provider-github.team.Team.property.parentTeamReadId"></a>

```csharp
public string ParentTeamReadId { get; }
```

- *Type:* string

---

##### `ParentTeamReadSlug`<sup>Required</sup> <a name="ParentTeamReadSlug" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlug"></a>

```csharp
public string ParentTeamReadSlug { get; }
```

- *Type:* string

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-github.team.Team.property.privacy"></a>

```csharp
public string Privacy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.team.Team.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-github.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.team.TeamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new TeamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object CreateDefaultMaintainer = null,
    string Description = null,
    string Id = null,
    string LdapDn = null,
    string ParentTeamId = null,
    string ParentTeamReadId = null,
    string ParentTeamReadSlug = null,
    string Privacy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.name">Name</a></code> | <code>string</code> | The name of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer">CreateDefaultMaintainer</a></code> | <code>object</code> | Adds a default maintainer to the team. Adds the creating user to the team when 'true'. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.description">Description</a></code> | <code>string</code> | A description of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.ldapDn">LdapDn</a></code> | <code>string</code> | The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamId">ParentTeamId</a></code> | <code>string</code> | The ID or slug of the parent team, if this is a nested team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId">ParentTeamReadId</a></code> | <code>string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug">ParentTeamReadSlug</a></code> | <code>string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.privacy">Privacy</a></code> | <code>string</code> | The level of privacy for the team. Must be one of 'secret' or 'closed'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.team.TeamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.team.TeamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.team.TeamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.team.TeamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.team.TeamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.team.TeamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.team.TeamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.team.TeamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#name Team#name}

---

##### `CreateDefaultMaintainer`<sup>Optional</sup> <a name="CreateDefaultMaintainer" id="@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer"></a>

```csharp
public object CreateDefaultMaintainer { get; set; }
```

- *Type:* object

Adds a default maintainer to the team. Adds the creating user to the team when 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.team.TeamConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#description Team#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.team.TeamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LdapDn`<sup>Optional</sup> <a name="LdapDn" id="@cdktf/provider-github.team.TeamConfig.property.ldapDn"></a>

```csharp
public string LdapDn { get; set; }
```

- *Type:* string

The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#ldap_dn Team#ldap_dn}

---

##### `ParentTeamId`<sup>Optional</sup> <a name="ParentTeamId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamId"></a>

```csharp
public string ParentTeamId { get; set; }
```

- *Type:* string

The ID or slug of the parent team, if this is a nested team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#parent_team_id Team#parent_team_id}

---

##### `ParentTeamReadId`<sup>Optional</sup> <a name="ParentTeamReadId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId"></a>

```csharp
public string ParentTeamReadId { get; set; }
```

- *Type:* string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}

---

##### `ParentTeamReadSlug`<sup>Optional</sup> <a name="ParentTeamReadSlug" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug"></a>

```csharp
public string ParentTeamReadSlug { get; set; }
```

- *Type:* string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-github.team.TeamConfig.property.privacy"></a>

```csharp
public string Privacy { get; set; }
```

- *Type:* string

The level of privacy for the team. Must be one of 'secret' or 'closed'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team#privacy Team#privacy}

---



